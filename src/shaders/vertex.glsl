uniform float uApmlitude;
uniform float uScrollSpeed;

float PI = 3.141592653589793;

mat4 rotationMatrix(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;

  return mat4(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s, 0.0, oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0, oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c, 0.0, 0.0, 0.0, 0.0, 1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}

void main() {

  vec3 newPos = position;
  newPos = rotate(newPos, vec3(0.0, 0.0, 1.0), uScrollSpeed * position.x * uApmlitude);
  // newPos.y += sin(uv.x * PI * 0.5) * uScrollSpeed;

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(newPos, 1.0);
}