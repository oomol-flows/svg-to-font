# SVG to Font Converter

A powerful OOMOL workflow project that transforms SVG icons into web-ready font files, making it easy to use custom icons in websites and applications.

## Overview

This project provides an automated solution for converting individual SVG icon files into complete font packages. It generates multiple font formats (WOFF, TTF) along with CSS files, allowing designers and developers to easily integrate custom icons into their projects as scalable web fonts.

## What This Project Does

### Main Functionality
- **SVG Icon Processing**: Converts single SVG files into font glyphs
- **Multi-Format Output**: Generates WOFF and TTF font files for broad browser compatibility
- **CSS Generation**: Creates ready-to-use CSS files with icon classes
- **Package Creation**: Bundles everything into a convenient ZIP file

### Use Cases
- **Web Designers**: Create custom icon fonts from SVG designs
- **UI/UX Teams**: Convert design assets into developer-ready font files
- **Brand Teams**: Transform logo variants and brand icons into web fonts
- **Content Creators**: Package custom symbols and pictographs as fonts

## Available Blocks

### SVG to Font Converter
**Purpose**: The core block that handles the entire conversion process

**What it does**:
- Takes a single SVG file as input
- Converts the SVG into font glyph data
- Generates web font files (WOFF, TTF formats)
- Creates CSS stylesheets with icon classes
- Packages everything into a downloadable ZIP file

**Inputs**:
- **SVG File**: Your source icon file (`.svg` format)
- **Output Path**: Where to save the font package (optional)
- **Font Name**: Custom name for your font family (optional)
- **CSS Prefix**: Custom prefix for CSS classes (optional)

**Output**:
- **Font Package**: ZIP file containing font files and CSS

## How to Use

### Basic Usage
1. **Prepare your SVG**: Ensure your SVG icon is clean and properly formatted
2. **Run the workflow**: Upload your SVG file to the converter
3. **Download the package**: Get your complete font package as a ZIP file
4. **Integrate**: Extract and use the font files in your web project

### Customization Options
- **Font Family Name**: Give your font a custom name (e.g., "MyIcons", "BrandSymbols")
- **CSS Class Prefix**: Set a prefix for CSS classes (e.g., "icon-", "brand-")
- **Output Location**: Choose where to save your font package

## Output Structure

When you run the converter, you'll receive a ZIP package containing:

```
font-package.zip
├── fonts/
│   ├── your-font.woff     # Web font file
│   └── your-font.ttf      # TrueType font file
├── css/
│   └── your-font.css      # Stylesheet with icon classes
└── preview.html           # Sample page showing your icons
```

## Technical Benefits

- **Cross-Browser Compatibility**: Supports all modern browsers
- **Scalable**: Icons remain crisp at any size
- **Lightweight**: Efficient file sizes for web delivery
- **Easy Integration**: Simple CSS classes for quick implementation
- **Customizable**: Flexible naming and styling options

## Who Can Use This

- **Designers**: No coding knowledge required - just upload SVG files
- **Content Teams**: Create branded icon sets quickly
- **Small Businesses**: Generate custom web fonts without expensive tools
- **Educators**: Learn about web fonts and icon systems
- **Hobbyists**: Create personal icon collections

## Getting Started

1. Prepare an SVG icon file
2. Open the OOMOL workflow
3. Upload your SVG to the "SVG to Font Converter" block
4. Optionally customize the font name and CSS prefix
5. Run the workflow
6. Download your font package
7. Extract and integrate into your project

## Support

This is an OOMOL platform workflow project. For technical support or feature requests, please refer to the OOMOL platform documentation or contact the project maintainer.

---

*Created with OOMOL - Visual Programming for Everyone*