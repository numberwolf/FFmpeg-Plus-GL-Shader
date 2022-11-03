//precision highp float;
uniform sampler2D tex;
varying vec2 TextureCoordsVarying;
uniform float playTime;
const float PI = 3.1415926;

float rand(float n) {
    return fract(sin(n) * 43758.5453123);
}

void main() {
    float duration = 0.7;
    float maxScale = 1.1;
    float offset = 0.02;

    float progress = mod(playTime, duration) / duration; // 0~1
    vec2 offsetCoords = vec2(offset, offset) * progress;
    float scale = 1.0 + (maxScale - 1.0) * progress;

    vec4 mask = texture2D(tex, TextureCoordsVarying);
    gl_FragColor = vec4(mask);
}
