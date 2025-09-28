import fs from 'node:fs';
import path from 'node:path';
import { SvgPacker } from 'svg-packer';
import type { Context } from "@oomol/types/oocana";

//#region generated meta
type Inputs = {
    svg_file: string;
    out_zip: string | null;
    fontName: string | null;
    cssPrefix: string | null;
};
type Outputs = {
    out_zip: string;
};
//#endregion

interface SvgIcon {
    path: string;
    name: string;
    svg: string;
}

interface SvgPackerOptions {
    fontName?: string;
    cssPrefix?: string;
    icons: SvgIcon[];
}

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Outputs> {

    let { svg_file, out_zip, fontName, cssPrefix } = params;

    if (!svg_file) {
        throw new Error('svg_file parameter is required');
    }

    out_zip = out_zip || path.dirname(svg_file);
    fontName = fontName || "iconfont";
    cssPrefix = cssPrefix || "icon-";

    const svg = getSingleInput(svg_file);
    const file = getOutFile(out_zip);

    console.info('Will generate font from SVG:', svg.name, '->', file);

    const result = await SvgPacker({
        fontName,
        cssPrefix,
        icons: [svg]
    });

    const buffer = await result.zip.blob.arrayBuffer();
    fs.writeFileSync(file, new Uint8Array(buffer));

    return { out_zip: file };
}

function getSingleInput(filePath: string): SvgIcon {
    if (typeof filePath !== 'string') {
        throw new Error('svg_file must be a string');
    }

    if (!fs.existsSync(filePath)) {
        throw new Error(`SVG file not found: ${filePath}`);
    }

    if (!filePath.endsWith('.svg')) {
        throw new Error('Input file must be an SVG file');
    }

    return {
        path: filePath,
        name: path.basename(filePath, '.svg').toLowerCase(),
        svg: fs.readFileSync(filePath, 'utf8')
    };
}

function getOutFile(str: string): string {
    if (typeof str !== 'string') {
        throw new Error('out_zip must be a string');
    }

    let result = str;
    let testConflict = false;

    try {
        const stats = fs.statSync(result);
        if (stats.isDirectory()) {
            result = path.join(result, 'iconfont.zip');
            testConflict = true;
        } else if (stats.isFile()) {
            testConflict = true;
        } else {
            throw new Error('out_zip must be a file or directory');
        }
    } catch (err: any) {
        if (err.code === 'ENOENT') {
            if (!result.endsWith('.zip')) {
                result = path.join(result, 'iconfont.zip');
            }
        } else {
            throw err;
        }
    }

    if (testConflict) {
        while (fs.existsSync(result)) {
            if (result.endsWith('.zip')) {
                result = result.replace(/\.zip$/, '-1.zip');
            } else {
                result = result + '-1';
            }
        }
    }

    return result;
}
