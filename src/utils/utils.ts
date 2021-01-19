
interface RGB {
    r: number,
    g: number,
    b: number,
}

export function hexToRgb(hex: string): string {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return "black"
    const rgb = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    }
    return "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0.5)"
}