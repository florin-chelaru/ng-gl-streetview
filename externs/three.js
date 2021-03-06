/**
 * Created by Florin Chelaru ( florin [dot] chelaru [at] gmail [dot] com )
 * Date: 4/8/2016
 * Time: 9:49 PM
 */

var THREE = {
  "REVISION": {},
  "MOUSE": {
    "LEFT": {},
    "MIDDLE": {},
    "RIGHT": {}
  },
  "CullFaceNone": {},
  "CullFaceBack": {},
  "CullFaceFront": {},
  "CullFaceFrontBack": {},
  "FrontFaceDirectionCW": {},
  "FrontFaceDirectionCCW": {},
  "BasicShadowMap": {},
  "PCFShadowMap": {},
  "PCFSoftShadowMap": {},
  "FrontSide": {},
  "BackSide": {},
  "DoubleSide": {},
  "FlatShading": {},
  "SmoothShading": {},
  "NoColors": {},
  "FaceColors": {},
  "VertexColors": {},
  "NoBlending": {},
  "NormalBlending": {},
  "AdditiveBlending": {},
  "SubtractiveBlending": {},
  "MultiplyBlending": {},
  "CustomBlending": {},
  "AddEquation": {},
  "SubtractEquation": {},
  "ReverseSubtractEquation": {},
  "MinEquation": {},
  "MaxEquation": {},
  "ZeroFactor": {},
  "OneFactor": {},
  "SrcColorFactor": {},
  "OneMinusSrcColorFactor": {},
  "SrcAlphaFactor": {},
  "OneMinusSrcAlphaFactor": {},
  "DstAlphaFactor": {},
  "OneMinusDstAlphaFactor": {},
  "DstColorFactor": {},
  "OneMinusDstColorFactor": {},
  "SrcAlphaSaturateFactor": {},
  "NeverDepth": {},
  "AlwaysDepth": {},
  "LessDepth": {},
  "LessEqualDepth": {},
  "EqualDepth": {},
  "GreaterEqualDepth": {},
  "GreaterDepth": {},
  "NotEqualDepth": {},
  "MultiplyOperation": {},
  "MixOperation": {},
  "AddOperation": {},
  "NoToneMapping": {},
  "LinearToneMapping": {},
  "ReinhardToneMapping": {},
  "Uncharted2ToneMapping": {},
  "CineonToneMapping": {},
  "UVMapping": {},
  "CubeReflectionMapping": {},
  "CubeRefractionMapping": {},
  "EquirectangularReflectionMapping": {},
  "EquirectangularRefractionMapping": {},
  "SphericalReflectionMapping": {},
  "CubeUVReflectionMapping": {},
  "CubeUVRefractionMapping": {},
  "RepeatWrapping": {},
  "ClampToEdgeWrapping": {},
  "MirroredRepeatWrapping": {},
  "NearestFilter": {},
  "NearestMipMapNearestFilter": {},
  "NearestMipMapLinearFilter": {},
  "LinearFilter": {},
  "LinearMipMapNearestFilter": {},
  "LinearMipMapLinearFilter": {},
  "UnsignedByteType": {},
  "ByteType": {},
  "ShortType": {},
  "UnsignedShortType": {},
  "IntType": {},
  "UnsignedIntType": {},
  "FloatType": {},
  "HalfFloatType": {},
  "UnsignedShort4444Type": {},
  "UnsignedShort5551Type": {},
  "UnsignedShort565Type": {},
  "AlphaFormat": {},
  "RGBFormat": {},
  "RGBAFormat": {},
  "LuminanceFormat": {},
  "LuminanceAlphaFormat": {},
  "RGBEFormat": {},
  "RGB_S3TC_DXT1_Format": {},
  "RGBA_S3TC_DXT1_Format": {},
  "RGBA_S3TC_DXT3_Format": {},
  "RGBA_S3TC_DXT5_Format": {},
  "RGB_PVRTC_4BPPV1_Format": {},
  "RGB_PVRTC_2BPPV1_Format": {},
  "RGBA_PVRTC_4BPPV1_Format": {},
  "RGBA_PVRTC_2BPPV1_Format": {},
  "RGB_ETC1_Format": {},
  "LoopOnce": {},
  "LoopRepeat": {},
  "LoopPingPong": {},
  "InterpolateDiscrete": {},
  "InterpolateLinear": {},
  "InterpolateSmooth": {},
  "ZeroCurvatureEnding": {},
  "ZeroSlopeEnding": {},
  "WrapAroundEnding": {},
  "TrianglesDrawMode": {},
  "TriangleStripDrawMode": {},
  "TriangleFanDrawMode": {},
  "LinearEncoding": {},
  "sRGBEncoding": {},
  "GammaEncoding": {},
  "RGBEEncoding": {},
  "LogLuvEncoding": {},
  "RGBM7Encoding": {},
  "RGBM16Encoding": {},
  "RGBDEncoding": {},
  "Color": function () {},
  "ColorKeywords": {
    "aliceblue": {},
    "antiquewhite": {},
    "aqua": {},
    "aquamarine": {},
    "azure": {},
    "beige": {},
    "bisque": {},
    "black": {},
    "blanchedalmond": {},
    "blue": {},
    "blueviolet": {},
    "brown": {},
    "burlywood": {},
    "cadetblue": {},
    "chartreuse": {},
    "chocolate": {},
    "coral": {},
    "cornflowerblue": {},
    "cornsilk": {},
    "crimson": {},
    "cyan": {},
    "darkblue": {},
    "darkcyan": {},
    "darkgoldenrod": {},
    "darkgray": {},
    "darkgreen": {},
    "darkgrey": {},
    "darkkhaki": {},
    "darkmagenta": {},
    "darkolivegreen": {},
    "darkorange": {},
    "darkorchid": {},
    "darkred": {},
    "darksalmon": {},
    "darkseagreen": {},
    "darkslateblue": {},
    "darkslategray": {},
    "darkslategrey": {},
    "darkturquoise": {},
    "darkviolet": {},
    "deeppink": {},
    "deepskyblue": {},
    "dimgray": {},
    "dimgrey": {},
    "dodgerblue": {},
    "firebrick": {},
    "floralwhite": {},
    "forestgreen": {},
    "fuchsia": {},
    "gainsboro": {},
    "ghostwhite": {},
    "gold": {},
    "goldenrod": {},
    "gray": {},
    "green": {},
    "greenyellow": {},
    "grey": {},
    "honeydew": {},
    "hotpink": {},
    "indianred": {},
    "indigo": {},
    "ivory": {},
    "khaki": {},
    "lavender": {},
    "lavenderblush": {},
    "lawngreen": {},
    "lemonchiffon": {},
    "lightblue": {},
    "lightcoral": {},
    "lightcyan": {},
    "lightgoldenrodyellow": {},
    "lightgray": {},
    "lightgreen": {},
    "lightgrey": {},
    "lightpink": {},
    "lightsalmon": {},
    "lightseagreen": {},
    "lightskyblue": {},
    "lightslategray": {},
    "lightslategrey": {},
    "lightsteelblue": {},
    "lightyellow": {},
    "lime": {},
    "limegreen": {},
    "linen": {},
    "magenta": {},
    "maroon": {},
    "mediumaquamarine": {},
    "mediumblue": {},
    "mediumorchid": {},
    "mediumpurple": {},
    "mediumseagreen": {},
    "mediumslateblue": {},
    "mediumspringgreen": {},
    "mediumturquoise": {},
    "mediumvioletred": {},
    "midnightblue": {},
    "mintcream": {},
    "mistyrose": {},
    "moccasin": {},
    "navajowhite": {},
    "navy": {},
    "oldlace": {},
    "olive": {},
    "olivedrab": {},
    "orange": {},
    "orangered": {},
    "orchid": {},
    "palegoldenrod": {},
    "palegreen": {},
    "paleturquoise": {},
    "palevioletred": {},
    "papayawhip": {},
    "peachpuff": {},
    "peru": {},
    "pink": {},
    "plum": {},
    "powderblue": {},
    "purple": {},
    "red": {},
    "rosybrown": {},
    "royalblue": {},
    "saddlebrown": {},
    "salmon": {},
    "sandybrown": {},
    "seagreen": {},
    "seashell": {},
    "sienna": {},
    "silver": {},
    "skyblue": {},
    "slateblue": {},
    "slategray": {},
    "slategrey": {},
    "snow": {},
    "springgreen": {},
    "steelblue": {},
    "tan": {},
    "teal": {},
    "thistle": {},
    "tomato": {},
    "turquoise": {},
    "violet": {},
    "wheat": {},
    "white": {},
    "whitesmoke": {},
    "yellow": {},
    "yellowgreen": {}
  },
  /**
   * @param x
   * @param y
   * @param z
   * @param w
   * @constructor
   */
  "Quaternion": function ( x, y, z, w ) {},
  "Vector2": function () {},
  /**
   * @param x
   * @param y
   * @param z
   * @constructor
   */
  "Vector3": function ( x, y, z ) {},
  "Vector4": function () {},

  /**
   * @param x
   * @param y
   * @param z
   * @param order
   * @constructor
   */
  "Euler": function ( x, y, z, order ) {},
  "Line3": function () {},
  "Box2": function () {},
  "Box3": function () {},
  "Matrix3": function () {},
  "Matrix4": function () {},
  "Ray": function () {},
  "Sphere": function () {},
  "Frustum": function () {},
  "Plane": function () {},
  "Spherical": function () {},
  "Math": {
    "generateUUID": function () {},
    "clamp": function () {},
    "euclideanModulo": function () {},
    "mapLinear": function () {},
    "smoothstep": function () {},
    "smootherstep": function () {},
    "random16": function () {},
    "randInt": function () {},
    "randFloat": function () {},
    "randFloatSpread": function () {},
    "degToRad": function () {},
    "radToDeg": function () {},
    "isPowerOfTwo": function () {},
    "nearestPowerOfTwo": function () {},
    "nextPowerOfTwo": function () {}
  },
  "Spline": function () {},
  "Triangle": function () {},
  "Interpolant": function () {},
  "CubicInterpolant": function () {},
  "DiscreteInterpolant": function () {},
  "LinearInterpolant": function () {},
  "QuaternionLinearInterpolant": function () {},
  "Clock": function () {},
  "EventDispatcher": function () {},
  "Layers": function () {},
  "Raycaster": function () {},
  "Object3D": function () {},
  "Object3DIdCount": {},
  "Face3": function () {},
  "BufferAttribute": function () {},
  "Int8Attribute": function () {},
  "Uint8Attribute": function () {},
  "Uint8ClampedAttribute": function () {},
  "Int16Attribute": function () {},
  "Uint16Attribute": function () {},
  "Int32Attribute": function () {},
  "Uint32Attribute": function () {},
  "Float32Attribute": function () {},
  "Float64Attribute": function () {},
  "DynamicBufferAttribute": function () {},
  "InstancedBufferAttribute": function () {},
  "InterleavedBuffer": function () {},
  "InstancedInterleavedBuffer": function () {},
  "InterleavedBufferAttribute": function () {},
  "Geometry": function () {},
  "GeometryIdCount": {},
  "DirectGeometry": function () {},
  "BufferGeometry": function () {},
  "InstancedBufferGeometry": function () {},
  "Uniform": function () {},
  "AnimationClip": function () {},
  "AnimationMixer": function () {},
  "AnimationObjectGroup": function () {},
  "AnimationUtils": {
    "arraySlice": function () {},
    "convertArray": function () {},
    "isTypedArray": function () {},
    "getKeyframeOrder": function () {},
    "sortedArray": function () {},
    "flattenJSON": function () {}
  },
  "KeyframeTrack": function () {},
  "PropertyBinding": function () {},
  "PropertyMixer": function () {},
  "BooleanKeyframeTrack": function () {},
  "NumberKeyframeTrack": function () {},
  "QuaternionKeyframeTrack": function () {},
  "StringKeyframeTrack": function () {},
  "VectorKeyframeTrack": function () {},
  "Audio": function () {},
  "AudioAnalyser": function () {},
  "AudioBuffer": function () {},
  "PositionalAudio": function () {},
  "AudioListener": function () {},

  /**
   * @constructor
   */
  "Camera": function () {},
  "CubeCamera": function () {},
  "OrthographicCamera": function () {},

  /**
   * @param fov
   * @param aspect
   * @param near
   * @param far
   * @constructor
   * @extends {THREE.Camera}
   */
  "PerspectiveCamera": function ( fov, aspect, near, far ) {},
  "StereoCamera": function () {},
  /**
   * @param [color]
   * @param [intensity]
   * @constructor
   */
  "Light": function ( color, intensity ) {},
  "LightShadow": function () {},
  /**
   * @param [color]
   * @param [intensity]
   * @constructor
   */
  "AmbientLight": function (color, intensity) {},
  /**
   * @param [color]
   * @param [intensity]
   * @constructor
   */
  "DirectionalLight": function ( color, intensity ) {},
  "HemisphereLight": function () {},
  "PointLight": function () {},
  "SpotLight": function () {},
  "Cache": {
    "enabled": {},
    "files": function () {},
    "add": function () {},
    "get": function () {},
    "remove": function () {},
    "clear": function () {}
  },
  "Loader": function () {},
  "XHRLoader": function () {},
  "FontLoader": function () {},
  "ImageLoader": function () {},
  /**
   * @param manager
   * @constructor
   */
  "JSONLoader": function ( manager ) {},
  "LoadingManager": function () {},
  "DefaultLoadingManager": {
    "onStart": {},
    "onLoad": {},
    "onProgress": {},
    "onError": {},
    "itemStart": function () {},
    "itemEnd": function () {},
    "itemError": function () {}
  },
  "BufferGeometryLoader": function () {},
  "MaterialLoader": function () {},
  "ObjectLoader": function () {},
  "TextureLoader": function () {},
  "CubeTextureLoader": function () {},
  "BinaryTextureLoader": function () {},
  "DataTextureLoader": function () {},
  "CompressedTextureLoader": function () {},
  /**
   * @constructor
   */
  "Material": function () {},
  "MaterialIdCount": {},
  "LineBasicMaterial": function () {},
  "LineDashedMaterial": function () {},
  /**
   * @constructor
   */
  "MeshBasicMaterial": function () {},
  /**
   * @constructor
   */
  "MeshLambertMaterial": function () {},
  "MeshPhongMaterial": function () {},
  "MeshStandardMaterial": function () {},
  "MeshDepthMaterial": function () {},
  "MeshNormalMaterial": function () {},
  "MultiMaterial": function () {},
  "PointsMaterial": function () {},
  "ShaderMaterial": function () {},
  "RawShaderMaterial": function () {},
  "SpriteMaterial": function () {},
  /**
   * @param image
   * @param mapping
   * @param wrapS
   * @param wrapT
   * @param magFilter
   * @param minFilter
   * @param format
   * @param type
   * @param anisotropy
   * @constructor
   */
  "Texture": function ( image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy ) {},
  "TextureIdCount": {},
  "CanvasTexture": function () {},
  "CubeTexture": function () {},
  "CompressedTexture": function () {},
  "DataTexture": function () {},
  "VideoTexture": function () {},
  "Group": function () {},
  "Points": function () {},
  "Line": function () {},
  "LineStrip": {},
  "LinePieces": {},
  "LineSegments": function () {},
  /**
   * @param geometry
   * @param material
   * @constructor
   */
  "Mesh": function (geometry, material) {},
  "Bone": function () {},
  "Skeleton": function () {},
  "SkinnedMesh": function () {},
  "LOD": function () {},
  "Sprite": function () {},
  "Particle": function () {},
  "LensFlare": function () {},
  /**
   * @constructor
   */
  "Scene": function () {},
  "Fog": function () {},
  "FogExp2": function () {},
  "ShaderChunk": {
    "alphamap_fragment": {},
    "alphamap_pars_fragment": {},
    "alphatest_fragment": {},
    "aomap_fragment": {},
    "aomap_pars_fragment": {},
    "begin_vertex": {},
    "beginnormal_vertex": {},
    "bsdfs": {},
    "bumpmap_pars_fragment": {},
    "color_fragment": {},
    "color_pars_fragment": {},
    "color_pars_vertex": {},
    "color_vertex": {},
    "common": {},
    "cube_uv_reflection_fragment": {},
    "defaultnormal_vertex": {},
    "displacementmap_vertex": {},
    "displacementmap_pars_vertex": {},
    "emissivemap_fragment": {},
    "emissivemap_pars_fragment": {},
    "encodings_pars_fragment": {},
    "encodings_fragment": {},
    "envmap_fragment": {},
    "envmap_pars_fragment": {},
    "envmap_pars_vertex": {},
    "envmap_vertex": {},
    "fog_fragment": {},
    "fog_pars_fragment": {},
    "lightmap_fragment": {},
    "lightmap_pars_fragment": {},
    "lights_lambert_vertex": {},
    "lights_pars": {},
    "lights_phong_fragment": {},
    "lights_phong_pars_fragment": {},
    "lights_phong_pars_vertex": {},
    "lights_phong_vertex": {},
    "lights_standard_fragment": {},
    "lights_standard_pars_fragment": {},
    "lights_template": {},
    "logdepthbuf_fragment": {},
    "logdepthbuf_pars_fragment": {},
    "logdepthbuf_pars_vertex": {},
    "logdepthbuf_vertex": {},
    "map_fragment": {},
    "map_pars_fragment": {},
    "map_particle_fragment": {},
    "map_particle_pars_fragment": {},
    "metalnessmap_fragment": {},
    "metalnessmap_pars_fragment": {},
    "morphnormal_vertex": {},
    "morphtarget_pars_vertex": {},
    "morphtarget_vertex": {},
    "normal_fragment": {},
    "normalmap_pars_fragment": {},
    "premultiplied_alpha_fragment": {},
    "project_vertex": {},
    "roughnessmap_fragment": {},
    "roughnessmap_pars_fragment": {},
    "shadowmap_pars_fragment": {},
    "shadowmap_pars_vertex": {},
    "shadowmap_vertex": {},
    "shadowmask_pars_fragment": {},
    "skinbase_vertex": {},
    "skinning_pars_vertex": {},
    "skinning_vertex": {},
    "skinnormal_vertex": {},
    "specularmap_fragment": {},
    "specularmap_pars_fragment": {},
    "tonemapping_fragment": {},
    "tonemapping_pars_fragment": {},
    "uv2_pars_fragment": {},
    "uv2_pars_vertex": {},
    "uv2_vertex": {},
    "uv_pars_fragment": {},
    "uv_pars_vertex": {},
    "uv_vertex": {},
    "worldpos_vertex": {},
    "cube_frag": {},
    "cube_vert": {},
    "depth_frag": {},
    "depth_vert": {},
    "depthRGBA_frag": {},
    "depthRGBA_vert": {},
    "distanceRGBA_frag": {},
    "distanceRGBA_vert": {},
    "equirect_frag": {},
    "equirect_vert": {},
    "linedashed_frag": {},
    "linedashed_vert": {},
    "meshbasic_frag": {},
    "meshbasic_vert": {},
    "meshlambert_frag": {},
    "meshlambert_vert": {},
    "meshphong_frag": {},
    "meshphong_vert": {},
    "meshstandard_frag": {},
    "meshstandard_vert": {},
    "normal_frag": {},
    "normal_vert": {},
    "points_frag": {},
    "points_vert": {}
  },
  "UniformsUtils": {
    "merge": function () {},
    "clone": function () {}
  },
  "UniformsLib": {
    "common": {
      "diffuse": {
        "type": {},
        "value": {
          "r": {},
          "g": {},
          "b": {},
          "constructor": function () {},
          "set": function () {},
          "setScalar": function () {},
          "setHex": function () {},
          "setRGB": function () {},
          "setHSL": function () {},
          "setStyle": function () {},
          "clone": function () {},
          "copy": function () {},
          "copyGammaToLinear": function () {},
          "copyLinearToGamma": function () {},
          "convertGammaToLinear": function () {},
          "convertLinearToGamma": function () {},
          "getHex": function () {},
          "getHexString": function () {},
          "getHSL": function () {},
          "getStyle": function () {},
          "offsetHSL": function () {},
          "add": function () {},
          "addColors": function () {},
          "addScalar": function () {},
          "multiply": function () {},
          "multiplyScalar": function () {},
          "lerp": function () {},
          "equals": function () {},
          "fromArray": function () {},
          "toArray": function () {}
        }
      },
      "opacity": {
        "type": {},
        "value": {}
      },
      "map": {
        "type": {},
        "value": function () {}
      },
      "offsetRepeat": {
        "type": {},
        "value": {
          "x": {},
          "y": {},
          "z": {},
          "w": {},
          "constructor": function () {},
          "set": function () {},
          "setScalar": function () {},
          "setX": function () {},
          "setY": function () {},
          "setZ": function () {},
          "setW": function () {},
          "setComponent": function () {},
          "getComponent": function () {},
          "clone": function () {},
          "copy": function () {},
          "add": function () {},
          "addScalar": function () {},
          "addVectors": function () {},
          "addScaledVector": function () {},
          "sub": function () {},
          "subScalar": function () {},
          "subVectors": function () {},
          "multiplyScalar": function () {},
          "applyMatrix4": function () {},
          "divideScalar": function () {},
          "setAxisAngleFromQuaternion": function () {},
          "setAxisAngleFromRotationMatrix": function () {},
          "min": function () {},
          "max": function () {},
          "clamp": function () {},
          "clampScalar": function () {},
          "floor": function () {},
          "ceil": function () {},
          "round": function () {},
          "roundToZero": function () {},
          "negate": function () {},
          "dot": function () {},
          "lengthSq": function () {},
          "length": function () {},
          "lengthManhattan": function () {},
          "normalize": function () {},
          "setLength": function () {},
          "lerp": function () {},
          "lerpVectors": function () {},
          "equals": function () {},
          "fromArray": function () {},
          "toArray": function () {},
          "fromAttribute": function () {}
        }
      },
      "specularMap": {
        "type": {},
        "value": function () {}
      },
      "alphaMap": {
        "type": {},
        "value": function () {}
      },
      "envMap": {
        "type": {},
        "value": function () {}
      },
      "flipEnvMap": {
        "type": {},
        "value": {}
      },
      "reflectivity": {
        "type": {},
        "value": {}
      },
      "refractionRatio": {
        "type": {},
        "value": {}
      }
    },
    "aomap": {
      "aoMap": {
        "type": {},
        "value": function () {}
      },
      "aoMapIntensity": {
        "type": {},
        "value": {}
      }
    },
    "lightmap": {
      "lightMap": {
        "type": {},
        "value": function () {}
      },
      "lightMapIntensity": {
        "type": {},
        "value": {}
      }
    },
    "emissivemap": {
      "emissiveMap": {
        "type": {},
        "value": function () {}
      }
    },
    "bumpmap": {
      "bumpMap": {
        "type": {},
        "value": function () {}
      },
      "bumpScale": {
        "type": {},
        "value": {}
      }
    },
    "normalmap": {
      "normalMap": {
        "type": {},
        "value": function () {}
      },
      "normalScale": {
        "type": {},
        "value": {
          "x": {},
          "y": {},
          "constructor": function () {},
          "width": {},
          "height": {},
          "set": function () {},
          "setScalar": function () {},
          "setX": function () {},
          "setY": function () {},
          "setComponent": function () {},
          "getComponent": function () {},
          "clone": function () {},
          "copy": function () {},
          "add": function () {},
          "addScalar": function () {},
          "addVectors": function () {},
          "addScaledVector": function () {},
          "sub": function () {},
          "subScalar": function () {},
          "subVectors": function () {},
          "multiply": function () {},
          "multiplyScalar": function () {},
          "divide": function () {},
          "divideScalar": function () {},
          "min": function () {},
          "max": function () {},
          "clamp": function () {},
          "clampScalar": function () {},
          "clampLength": function () {},
          "floor": function () {},
          "ceil": function () {},
          "round": function () {},
          "roundToZero": function () {},
          "negate": function () {},
          "dot": function () {},
          "lengthSq": function () {},
          "length": function () {},
          "lengthManhattan": function () {},
          "normalize": function () {},
          "angle": function () {},
          "distanceTo": function () {},
          "distanceToSquared": function () {},
          "setLength": function () {},
          "lerp": function () {},
          "lerpVectors": function () {},
          "equals": function () {},
          "fromArray": function () {},
          "toArray": function () {},
          "fromAttribute": function () {},
          "rotateAround": function () {}
        }
      }
    },
    "displacementmap": {
      "displacementMap": {
        "type": {},
        "value": function () {}
      },
      "displacementScale": {
        "type": {},
        "value": {}
      },
      "displacementBias": {
        "type": {},
        "value": {}
      }
    },
    "roughnessmap": {
      "roughnessMap": {
        "type": {},
        "value": function () {}
      }
    },
    "metalnessmap": {
      "metalnessMap": {
        "type": {},
        "value": function () {}
      }
    },
    "fog": {
      "fogDensity": {
        "type": {},
        "value": {}
      },
      "fogNear": {
        "type": {},
        "value": {}
      },
      "fogFar": {
        "type": {},
        "value": {}
      },
      "fogColor": {
        "type": {},
        "value": {
          "r": {},
          "g": {},
          "b": {},
          "constructor": function () {},
          "set": function () {},
          "setScalar": function () {},
          "setHex": function () {},
          "setRGB": function () {},
          "setHSL": function () {},
          "setStyle": function () {},
          "clone": function () {},
          "copy": function () {},
          "copyGammaToLinear": function () {},
          "copyLinearToGamma": function () {},
          "convertGammaToLinear": function () {},
          "convertLinearToGamma": function () {},
          "getHex": function () {},
          "getHexString": function () {},
          "getHSL": function () {},
          "getStyle": function () {},
          "offsetHSL": function () {},
          "add": function () {},
          "addColors": function () {},
          "addScalar": function () {},
          "multiply": function () {},
          "multiplyScalar": function () {},
          "lerp": function () {},
          "equals": function () {},
          "fromArray": function () {},
          "toArray": function () {}
        }
      }
    },
    "lights": {
      "ambientLightColor": {
        "type": {},
        "value": function () {}
      },
      "directionalLights": {
        "type": {},
        "value": function () {},
        "properties": {
          "direction": {
            "type": {}
          },
          "color": {
            "type": {}
          },
          "shadow": {
            "type": {}
          },
          "shadowBias": {
            "type": {}
          },
          "shadowRadius": {
            "type": {}
          },
          "shadowMapSize": {
            "type": {}
          }
        }
      },
      "directionalShadowMap": {
        "type": {},
        "value": function () {}
      },
      "directionalShadowMatrix": {
        "type": {},
        "value": function () {}
      },
      "spotLights": {
        "type": {},
        "value": function () {},
        "properties": {
          "color": {
            "type": {}
          },
          "position": {
            "type": {}
          },
          "direction": {
            "type": {}
          },
          "distance": {
            "type": {}
          },
          "coneCos": {
            "type": {}
          },
          "penumbraCos": {
            "type": {}
          },
          "decay": {
            "type": {}
          },
          "shadow": {
            "type": {}
          },
          "shadowBias": {
            "type": {}
          },
          "shadowRadius": {
            "type": {}
          },
          "shadowMapSize": {
            "type": {}
          }
        }
      },
      "spotShadowMap": {
        "type": {},
        "value": function () {}
      },
      "spotShadowMatrix": {
        "type": {},
        "value": function () {}
      },
      "pointLights": {
        "type": {},
        "value": function () {},
        "properties": {
          "color": {
            "type": {}
          },
          "position": {
            "type": {}
          },
          "decay": {
            "type": {}
          },
          "distance": {
            "type": {}
          },
          "shadow": {
            "type": {}
          },
          "shadowBias": {
            "type": {}
          },
          "shadowRadius": {
            "type": {}
          },
          "shadowMapSize": {
            "type": {}
          }
        }
      },
      "pointShadowMap": {
        "type": {},
        "value": function () {}
      },
      "pointShadowMatrix": {
        "type": {},
        "value": function () {}
      },
      "hemisphereLights": {
        "type": {},
        "value": function () {},
        "properties": {
          "direction": {
            "type": {}
          },
          "skyColor": {
            "type": {}
          },
          "groundColor": {
            "type": {}
          }
        }
      }
    },
    "points": {
      "diffuse": {
        "type": {},
        "value": {
          "r": {},
          "g": {},
          "b": {},
          "constructor": function () {},
          "set": function () {},
          "setScalar": function () {},
          "setHex": function () {},
          "setRGB": function () {},
          "setHSL": function () {},
          "setStyle": function () {},
          "clone": function () {},
          "copy": function () {},
          "copyGammaToLinear": function () {},
          "copyLinearToGamma": function () {},
          "convertGammaToLinear": function () {},
          "convertLinearToGamma": function () {},
          "getHex": function () {},
          "getHexString": function () {},
          "getHSL": function () {},
          "getStyle": function () {},
          "offsetHSL": function () {},
          "add": function () {},
          "addColors": function () {},
          "addScalar": function () {},
          "multiply": function () {},
          "multiplyScalar": function () {},
          "lerp": function () {},
          "equals": function () {},
          "fromArray": function () {},
          "toArray": function () {}
        }
      },
      "opacity": {
        "type": {},
        "value": {}
      },
      "size": {
        "type": {},
        "value": {}
      },
      "scale": {
        "type": {},
        "value": {}
      },
      "map": {
        "type": {},
        "value": function () {}
      },
      "offsetRepeat": {
        "type": {},
        "value": {
          "x": {},
          "y": {},
          "z": {},
          "w": {},
          "constructor": function () {},
          "set": function () {},
          "setScalar": function () {},
          "setX": function () {},
          "setY": function () {},
          "setZ": function () {},
          "setW": function () {},
          "setComponent": function () {},
          "getComponent": function () {},
          "clone": function () {},
          "copy": function () {},
          "add": function () {},
          "addScalar": function () {},
          "addVectors": function () {},
          "addScaledVector": function () {},
          "sub": function () {},
          "subScalar": function () {},
          "subVectors": function () {},
          "multiplyScalar": function () {},
          "applyMatrix4": function () {},
          "divideScalar": function () {},
          "setAxisAngleFromQuaternion": function () {},
          "setAxisAngleFromRotationMatrix": function () {},
          "min": function () {},
          "max": function () {},
          "clamp": function () {},
          "clampScalar": function () {},
          "floor": function () {},
          "ceil": function () {},
          "round": function () {},
          "roundToZero": function () {},
          "negate": function () {},
          "dot": function () {},
          "lengthSq": function () {},
          "length": function () {},
          "lengthManhattan": function () {},
          "normalize": function () {},
          "setLength": function () {},
          "lerp": function () {},
          "lerpVectors": function () {},
          "equals": function () {},
          "fromArray": function () {},
          "toArray": function () {},
          "fromAttribute": function () {}
        }
      }
    }
  },
  "ShaderLib": {
    "basic": {
      "uniforms": {
        "diffuse": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "opacity": {
          "type": {},
          "value": {}
        },
        "map": {
          "type": {},
          "value": function () {}
        },
        "offsetRepeat": {
          "type": {},
          "value": {
            "x": {},
            "y": {},
            "z": {},
            "w": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setX": function () {},
            "setY": function () {},
            "setZ": function () {},
            "setW": function () {},
            "setComponent": function () {},
            "getComponent": function () {},
            "clone": function () {},
            "copy": function () {},
            "add": function () {},
            "addScalar": function () {},
            "addVectors": function () {},
            "addScaledVector": function () {},
            "sub": function () {},
            "subScalar": function () {},
            "subVectors": function () {},
            "multiplyScalar": function () {},
            "applyMatrix4": function () {},
            "divideScalar": function () {},
            "setAxisAngleFromQuaternion": function () {},
            "setAxisAngleFromRotationMatrix": function () {},
            "min": function () {},
            "max": function () {},
            "clamp": function () {},
            "clampScalar": function () {},
            "floor": function () {},
            "ceil": function () {},
            "round": function () {},
            "roundToZero": function () {},
            "negate": function () {},
            "dot": function () {},
            "lengthSq": function () {},
            "length": function () {},
            "lengthManhattan": function () {},
            "normalize": function () {},
            "setLength": function () {},
            "lerp": function () {},
            "lerpVectors": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {},
            "fromAttribute": function () {}
          }
        },
        "specularMap": {
          "type": {},
          "value": function () {}
        },
        "alphaMap": {
          "type": {},
          "value": function () {}
        },
        "envMap": {
          "type": {},
          "value": function () {}
        },
        "flipEnvMap": {
          "type": {},
          "value": {}
        },
        "reflectivity": {
          "type": {},
          "value": {}
        },
        "refractionRatio": {
          "type": {},
          "value": {}
        },
        "aoMap": {
          "type": {},
          "value": function () {}
        },
        "aoMapIntensity": {
          "type": {},
          "value": {}
        },
        "fogDensity": {
          "type": {},
          "value": {}
        },
        "fogNear": {
          "type": {},
          "value": {}
        },
        "fogFar": {
          "type": {},
          "value": {}
        },
        "fogColor": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        }
      },
      "vertexShader": {},
      "fragmentShader": {}
    },
    "lambert": {
      "uniforms": {
        "diffuse": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "opacity": {
          "type": {},
          "value": {}
        },
        "map": {
          "type": {},
          "value": function () {}
        },
        "offsetRepeat": {
          "type": {},
          "value": {
            "x": {},
            "y": {},
            "z": {},
            "w": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setX": function () {},
            "setY": function () {},
            "setZ": function () {},
            "setW": function () {},
            "setComponent": function () {},
            "getComponent": function () {},
            "clone": function () {},
            "copy": function () {},
            "add": function () {},
            "addScalar": function () {},
            "addVectors": function () {},
            "addScaledVector": function () {},
            "sub": function () {},
            "subScalar": function () {},
            "subVectors": function () {},
            "multiplyScalar": function () {},
            "applyMatrix4": function () {},
            "divideScalar": function () {},
            "setAxisAngleFromQuaternion": function () {},
            "setAxisAngleFromRotationMatrix": function () {},
            "min": function () {},
            "max": function () {},
            "clamp": function () {},
            "clampScalar": function () {},
            "floor": function () {},
            "ceil": function () {},
            "round": function () {},
            "roundToZero": function () {},
            "negate": function () {},
            "dot": function () {},
            "lengthSq": function () {},
            "length": function () {},
            "lengthManhattan": function () {},
            "normalize": function () {},
            "setLength": function () {},
            "lerp": function () {},
            "lerpVectors": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {},
            "fromAttribute": function () {}
          }
        },
        "specularMap": {
          "type": {},
          "value": function () {}
        },
        "alphaMap": {
          "type": {},
          "value": function () {}
        },
        "envMap": {
          "type": {},
          "value": function () {}
        },
        "flipEnvMap": {
          "type": {},
          "value": {}
        },
        "reflectivity": {
          "type": {},
          "value": {}
        },
        "refractionRatio": {
          "type": {},
          "value": {}
        },
        "aoMap": {
          "type": {},
          "value": function () {}
        },
        "aoMapIntensity": {
          "type": {},
          "value": {}
        },
        "lightMap": {
          "type": {},
          "value": function () {}
        },
        "lightMapIntensity": {
          "type": {},
          "value": {}
        },
        "emissiveMap": {
          "type": {},
          "value": function () {}
        },
        "fogDensity": {
          "type": {},
          "value": {}
        },
        "fogNear": {
          "type": {},
          "value": {}
        },
        "fogFar": {
          "type": {},
          "value": {}
        },
        "fogColor": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "ambientLightColor": {
          "type": {},
          "value": function () {}
        },
        "directionalLights": {
          "type": {},
          "value": function () {},
          "properties": {
            "direction": {
              "type": {}
            },
            "color": {
              "type": {}
            },
            "shadow": {
              "type": {}
            },
            "shadowBias": {
              "type": {}
            },
            "shadowRadius": {
              "type": {}
            },
            "shadowMapSize": {
              "type": {}
            }
          }
        },
        "directionalShadowMap": {
          "type": {},
          "value": function () {}
        },
        "directionalShadowMatrix": {
          "type": {},
          "value": function () {}
        },
        "spotLights": {
          "type": {},
          "value": function () {},
          "properties": {
            "color": {
              "type": {}
            },
            "position": {
              "type": {}
            },
            "direction": {
              "type": {}
            },
            "distance": {
              "type": {}
            },
            "coneCos": {
              "type": {}
            },
            "penumbraCos": {
              "type": {}
            },
            "decay": {
              "type": {}
            },
            "shadow": {
              "type": {}
            },
            "shadowBias": {
              "type": {}
            },
            "shadowRadius": {
              "type": {}
            },
            "shadowMapSize": {
              "type": {}
            }
          }
        },
        "spotShadowMap": {
          "type": {},
          "value": function () {}
        },
        "spotShadowMatrix": {
          "type": {},
          "value": function () {}
        },
        "pointLights": {
          "type": {},
          "value": function () {},
          "properties": {
            "color": {
              "type": {}
            },
            "position": {
              "type": {}
            },
            "decay": {
              "type": {}
            },
            "distance": {
              "type": {}
            },
            "shadow": {
              "type": {}
            },
            "shadowBias": {
              "type": {}
            },
            "shadowRadius": {
              "type": {}
            },
            "shadowMapSize": {
              "type": {}
            }
          }
        },
        "pointShadowMap": {
          "type": {},
          "value": function () {}
        },
        "pointShadowMatrix": {
          "type": {},
          "value": function () {}
        },
        "hemisphereLights": {
          "type": {},
          "value": function () {},
          "properties": {
            "direction": {
              "type": {}
            },
            "skyColor": {
              "type": {}
            },
            "groundColor": {
              "type": {}
            }
          }
        },
        "emissive": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        }
      },
      "vertexShader": {},
      "fragmentShader": {}
    },
    "phong": {
      "uniforms": {
        "diffuse": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "opacity": {
          "type": {},
          "value": {}
        },
        "map": {
          "type": {},
          "value": function () {}
        },
        "offsetRepeat": {
          "type": {},
          "value": {
            "x": {},
            "y": {},
            "z": {},
            "w": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setX": function () {},
            "setY": function () {},
            "setZ": function () {},
            "setW": function () {},
            "setComponent": function () {},
            "getComponent": function () {},
            "clone": function () {},
            "copy": function () {},
            "add": function () {},
            "addScalar": function () {},
            "addVectors": function () {},
            "addScaledVector": function () {},
            "sub": function () {},
            "subScalar": function () {},
            "subVectors": function () {},
            "multiplyScalar": function () {},
            "applyMatrix4": function () {},
            "divideScalar": function () {},
            "setAxisAngleFromQuaternion": function () {},
            "setAxisAngleFromRotationMatrix": function () {},
            "min": function () {},
            "max": function () {},
            "clamp": function () {},
            "clampScalar": function () {},
            "floor": function () {},
            "ceil": function () {},
            "round": function () {},
            "roundToZero": function () {},
            "negate": function () {},
            "dot": function () {},
            "lengthSq": function () {},
            "length": function () {},
            "lengthManhattan": function () {},
            "normalize": function () {},
            "setLength": function () {},
            "lerp": function () {},
            "lerpVectors": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {},
            "fromAttribute": function () {}
          }
        },
        "specularMap": {
          "type": {},
          "value": function () {}
        },
        "alphaMap": {
          "type": {},
          "value": function () {}
        },
        "envMap": {
          "type": {},
          "value": function () {}
        },
        "flipEnvMap": {
          "type": {},
          "value": {}
        },
        "reflectivity": {
          "type": {},
          "value": {}
        },
        "refractionRatio": {
          "type": {},
          "value": {}
        },
        "aoMap": {
          "type": {},
          "value": function () {}
        },
        "aoMapIntensity": {
          "type": {},
          "value": {}
        },
        "lightMap": {
          "type": {},
          "value": function () {}
        },
        "lightMapIntensity": {
          "type": {},
          "value": {}
        },
        "emissiveMap": {
          "type": {},
          "value": function () {}
        },
        "bumpMap": {
          "type": {},
          "value": function () {}
        },
        "bumpScale": {
          "type": {},
          "value": {}
        },
        "normalMap": {
          "type": {},
          "value": function () {}
        },
        "normalScale": {
          "type": {},
          "value": {
            "x": {},
            "y": {},
            "constructor": function () {},
            "width": {},
            "height": {},
            "set": function () {},
            "setScalar": function () {},
            "setX": function () {},
            "setY": function () {},
            "setComponent": function () {},
            "getComponent": function () {},
            "clone": function () {},
            "copy": function () {},
            "add": function () {},
            "addScalar": function () {},
            "addVectors": function () {},
            "addScaledVector": function () {},
            "sub": function () {},
            "subScalar": function () {},
            "subVectors": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "divide": function () {},
            "divideScalar": function () {},
            "min": function () {},
            "max": function () {},
            "clamp": function () {},
            "clampScalar": function () {},
            "clampLength": function () {},
            "floor": function () {},
            "ceil": function () {},
            "round": function () {},
            "roundToZero": function () {},
            "negate": function () {},
            "dot": function () {},
            "lengthSq": function () {},
            "length": function () {},
            "lengthManhattan": function () {},
            "normalize": function () {},
            "angle": function () {},
            "distanceTo": function () {},
            "distanceToSquared": function () {},
            "setLength": function () {},
            "lerp": function () {},
            "lerpVectors": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {},
            "fromAttribute": function () {},
            "rotateAround": function () {}
          }
        },
        "displacementMap": {
          "type": {},
          "value": function () {}
        },
        "displacementScale": {
          "type": {},
          "value": {}
        },
        "displacementBias": {
          "type": {},
          "value": {}
        },
        "fogDensity": {
          "type": {},
          "value": {}
        },
        "fogNear": {
          "type": {},
          "value": {}
        },
        "fogFar": {
          "type": {},
          "value": {}
        },
        "fogColor": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "ambientLightColor": {
          "type": {},
          "value": function () {}
        },
        "directionalLights": {
          "type": {},
          "value": function () {},
          "properties": {
            "direction": {
              "type": {}
            },
            "color": {
              "type": {}
            },
            "shadow": {
              "type": {}
            },
            "shadowBias": {
              "type": {}
            },
            "shadowRadius": {
              "type": {}
            },
            "shadowMapSize": {
              "type": {}
            }
          }
        },
        "directionalShadowMap": {
          "type": {},
          "value": function () {}
        },
        "directionalShadowMatrix": {
          "type": {},
          "value": function () {}
        },
        "spotLights": {
          "type": {},
          "value": function () {},
          "properties": {
            "color": {
              "type": {}
            },
            "position": {
              "type": {}
            },
            "direction": {
              "type": {}
            },
            "distance": {
              "type": {}
            },
            "coneCos": {
              "type": {}
            },
            "penumbraCos": {
              "type": {}
            },
            "decay": {
              "type": {}
            },
            "shadow": {
              "type": {}
            },
            "shadowBias": {
              "type": {}
            },
            "shadowRadius": {
              "type": {}
            },
            "shadowMapSize": {
              "type": {}
            }
          }
        },
        "spotShadowMap": {
          "type": {},
          "value": function () {}
        },
        "spotShadowMatrix": {
          "type": {},
          "value": function () {}
        },
        "pointLights": {
          "type": {},
          "value": function () {},
          "properties": {
            "color": {
              "type": {}
            },
            "position": {
              "type": {}
            },
            "decay": {
              "type": {}
            },
            "distance": {
              "type": {}
            },
            "shadow": {
              "type": {}
            },
            "shadowBias": {
              "type": {}
            },
            "shadowRadius": {
              "type": {}
            },
            "shadowMapSize": {
              "type": {}
            }
          }
        },
        "pointShadowMap": {
          "type": {},
          "value": function () {}
        },
        "pointShadowMatrix": {
          "type": {},
          "value": function () {}
        },
        "hemisphereLights": {
          "type": {},
          "value": function () {},
          "properties": {
            "direction": {
              "type": {}
            },
            "skyColor": {
              "type": {}
            },
            "groundColor": {
              "type": {}
            }
          }
        },
        "emissive": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "specular": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "shininess": {
          "type": {},
          "value": {}
        }
      },
      "vertexShader": {},
      "fragmentShader": {}
    },
    "standard": {
      "uniforms": {
        "diffuse": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "opacity": {
          "type": {},
          "value": {}
        },
        "map": {
          "type": {},
          "value": function () {}
        },
        "offsetRepeat": {
          "type": {},
          "value": {
            "x": {},
            "y": {},
            "z": {},
            "w": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setX": function () {},
            "setY": function () {},
            "setZ": function () {},
            "setW": function () {},
            "setComponent": function () {},
            "getComponent": function () {},
            "clone": function () {},
            "copy": function () {},
            "add": function () {},
            "addScalar": function () {},
            "addVectors": function () {},
            "addScaledVector": function () {},
            "sub": function () {},
            "subScalar": function () {},
            "subVectors": function () {},
            "multiplyScalar": function () {},
            "applyMatrix4": function () {},
            "divideScalar": function () {},
            "setAxisAngleFromQuaternion": function () {},
            "setAxisAngleFromRotationMatrix": function () {},
            "min": function () {},
            "max": function () {},
            "clamp": function () {},
            "clampScalar": function () {},
            "floor": function () {},
            "ceil": function () {},
            "round": function () {},
            "roundToZero": function () {},
            "negate": function () {},
            "dot": function () {},
            "lengthSq": function () {},
            "length": function () {},
            "lengthManhattan": function () {},
            "normalize": function () {},
            "setLength": function () {},
            "lerp": function () {},
            "lerpVectors": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {},
            "fromAttribute": function () {}
          }
        },
        "specularMap": {
          "type": {},
          "value": function () {}
        },
        "alphaMap": {
          "type": {},
          "value": function () {}
        },
        "envMap": {
          "type": {},
          "value": function () {}
        },
        "flipEnvMap": {
          "type": {},
          "value": {}
        },
        "reflectivity": {
          "type": {},
          "value": {}
        },
        "refractionRatio": {
          "type": {},
          "value": {}
        },
        "aoMap": {
          "type": {},
          "value": function () {}
        },
        "aoMapIntensity": {
          "type": {},
          "value": {}
        },
        "lightMap": {
          "type": {},
          "value": function () {}
        },
        "lightMapIntensity": {
          "type": {},
          "value": {}
        },
        "emissiveMap": {
          "type": {},
          "value": function () {}
        },
        "bumpMap": {
          "type": {},
          "value": function () {}
        },
        "bumpScale": {
          "type": {},
          "value": {}
        },
        "normalMap": {
          "type": {},
          "value": function () {}
        },
        "normalScale": {
          "type": {},
          "value": {
            "x": {},
            "y": {},
            "constructor": function () {},
            "width": {},
            "height": {},
            "set": function () {},
            "setScalar": function () {},
            "setX": function () {},
            "setY": function () {},
            "setComponent": function () {},
            "getComponent": function () {},
            "clone": function () {},
            "copy": function () {},
            "add": function () {},
            "addScalar": function () {},
            "addVectors": function () {},
            "addScaledVector": function () {},
            "sub": function () {},
            "subScalar": function () {},
            "subVectors": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "divide": function () {},
            "divideScalar": function () {},
            "min": function () {},
            "max": function () {},
            "clamp": function () {},
            "clampScalar": function () {},
            "clampLength": function () {},
            "floor": function () {},
            "ceil": function () {},
            "round": function () {},
            "roundToZero": function () {},
            "negate": function () {},
            "dot": function () {},
            "lengthSq": function () {},
            "length": function () {},
            "lengthManhattan": function () {},
            "normalize": function () {},
            "angle": function () {},
            "distanceTo": function () {},
            "distanceToSquared": function () {},
            "setLength": function () {},
            "lerp": function () {},
            "lerpVectors": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {},
            "fromAttribute": function () {},
            "rotateAround": function () {}
          }
        },
        "displacementMap": {
          "type": {},
          "value": function () {}
        },
        "displacementScale": {
          "type": {},
          "value": {}
        },
        "displacementBias": {
          "type": {},
          "value": {}
        },
        "roughnessMap": {
          "type": {},
          "value": function () {}
        },
        "metalnessMap": {
          "type": {},
          "value": function () {}
        },
        "fogDensity": {
          "type": {},
          "value": {}
        },
        "fogNear": {
          "type": {},
          "value": {}
        },
        "fogFar": {
          "type": {},
          "value": {}
        },
        "fogColor": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "ambientLightColor": {
          "type": {},
          "value": function () {}
        },
        "directionalLights": {
          "type": {},
          "value": function () {},
          "properties": {
            "direction": {
              "type": {}
            },
            "color": {
              "type": {}
            },
            "shadow": {
              "type": {}
            },
            "shadowBias": {
              "type": {}
            },
            "shadowRadius": {
              "type": {}
            },
            "shadowMapSize": {
              "type": {}
            }
          }
        },
        "directionalShadowMap": {
          "type": {},
          "value": function () {}
        },
        "directionalShadowMatrix": {
          "type": {},
          "value": function () {}
        },
        "spotLights": {
          "type": {},
          "value": function () {},
          "properties": {
            "color": {
              "type": {}
            },
            "position": {
              "type": {}
            },
            "direction": {
              "type": {}
            },
            "distance": {
              "type": {}
            },
            "coneCos": {
              "type": {}
            },
            "penumbraCos": {
              "type": {}
            },
            "decay": {
              "type": {}
            },
            "shadow": {
              "type": {}
            },
            "shadowBias": {
              "type": {}
            },
            "shadowRadius": {
              "type": {}
            },
            "shadowMapSize": {
              "type": {}
            }
          }
        },
        "spotShadowMap": {
          "type": {},
          "value": function () {}
        },
        "spotShadowMatrix": {
          "type": {},
          "value": function () {}
        },
        "pointLights": {
          "type": {},
          "value": function () {},
          "properties": {
            "color": {
              "type": {}
            },
            "position": {
              "type": {}
            },
            "decay": {
              "type": {}
            },
            "distance": {
              "type": {}
            },
            "shadow": {
              "type": {}
            },
            "shadowBias": {
              "type": {}
            },
            "shadowRadius": {
              "type": {}
            },
            "shadowMapSize": {
              "type": {}
            }
          }
        },
        "pointShadowMap": {
          "type": {},
          "value": function () {}
        },
        "pointShadowMatrix": {
          "type": {},
          "value": function () {}
        },
        "hemisphereLights": {
          "type": {},
          "value": function () {},
          "properties": {
            "direction": {
              "type": {}
            },
            "skyColor": {
              "type": {}
            },
            "groundColor": {
              "type": {}
            }
          }
        },
        "emissive": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "roughness": {
          "type": {},
          "value": {}
        },
        "metalness": {
          "type": {},
          "value": {}
        },
        "envMapIntensity": {
          "type": {},
          "value": {}
        }
      },
      "vertexShader": {},
      "fragmentShader": {}
    },
    "points": {
      "uniforms": {
        "diffuse": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "opacity": {
          "type": {},
          "value": {}
        },
        "size": {
          "type": {},
          "value": {}
        },
        "scale": {
          "type": {},
          "value": {}
        },
        "map": {
          "type": {},
          "value": function () {}
        },
        "offsetRepeat": {
          "type": {},
          "value": {
            "x": {},
            "y": {},
            "z": {},
            "w": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setX": function () {},
            "setY": function () {},
            "setZ": function () {},
            "setW": function () {},
            "setComponent": function () {},
            "getComponent": function () {},
            "clone": function () {},
            "copy": function () {},
            "add": function () {},
            "addScalar": function () {},
            "addVectors": function () {},
            "addScaledVector": function () {},
            "sub": function () {},
            "subScalar": function () {},
            "subVectors": function () {},
            "multiplyScalar": function () {},
            "applyMatrix4": function () {},
            "divideScalar": function () {},
            "setAxisAngleFromQuaternion": function () {},
            "setAxisAngleFromRotationMatrix": function () {},
            "min": function () {},
            "max": function () {},
            "clamp": function () {},
            "clampScalar": function () {},
            "floor": function () {},
            "ceil": function () {},
            "round": function () {},
            "roundToZero": function () {},
            "negate": function () {},
            "dot": function () {},
            "lengthSq": function () {},
            "length": function () {},
            "lengthManhattan": function () {},
            "normalize": function () {},
            "setLength": function () {},
            "lerp": function () {},
            "lerpVectors": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {},
            "fromAttribute": function () {}
          }
        },
        "fogDensity": {
          "type": {},
          "value": {}
        },
        "fogNear": {
          "type": {},
          "value": {}
        },
        "fogFar": {
          "type": {},
          "value": {}
        },
        "fogColor": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        }
      },
      "vertexShader": {},
      "fragmentShader": {}
    },
    "dashed": {
      "uniforms": {
        "diffuse": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "opacity": {
          "type": {},
          "value": {}
        },
        "map": {
          "type": {},
          "value": function () {}
        },
        "offsetRepeat": {
          "type": {},
          "value": {
            "x": {},
            "y": {},
            "z": {},
            "w": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setX": function () {},
            "setY": function () {},
            "setZ": function () {},
            "setW": function () {},
            "setComponent": function () {},
            "getComponent": function () {},
            "clone": function () {},
            "copy": function () {},
            "add": function () {},
            "addScalar": function () {},
            "addVectors": function () {},
            "addScaledVector": function () {},
            "sub": function () {},
            "subScalar": function () {},
            "subVectors": function () {},
            "multiplyScalar": function () {},
            "applyMatrix4": function () {},
            "divideScalar": function () {},
            "setAxisAngleFromQuaternion": function () {},
            "setAxisAngleFromRotationMatrix": function () {},
            "min": function () {},
            "max": function () {},
            "clamp": function () {},
            "clampScalar": function () {},
            "floor": function () {},
            "ceil": function () {},
            "round": function () {},
            "roundToZero": function () {},
            "negate": function () {},
            "dot": function () {},
            "lengthSq": function () {},
            "length": function () {},
            "lengthManhattan": function () {},
            "normalize": function () {},
            "setLength": function () {},
            "lerp": function () {},
            "lerpVectors": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {},
            "fromAttribute": function () {}
          }
        },
        "specularMap": {
          "type": {},
          "value": function () {}
        },
        "alphaMap": {
          "type": {},
          "value": function () {}
        },
        "envMap": {
          "type": {},
          "value": function () {}
        },
        "flipEnvMap": {
          "type": {},
          "value": {}
        },
        "reflectivity": {
          "type": {},
          "value": {}
        },
        "refractionRatio": {
          "type": {},
          "value": {}
        },
        "fogDensity": {
          "type": {},
          "value": {}
        },
        "fogNear": {
          "type": {},
          "value": {}
        },
        "fogFar": {
          "type": {},
          "value": {}
        },
        "fogColor": {
          "type": {},
          "value": {
            "r": {},
            "g": {},
            "b": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setHex": function () {},
            "setRGB": function () {},
            "setHSL": function () {},
            "setStyle": function () {},
            "clone": function () {},
            "copy": function () {},
            "copyGammaToLinear": function () {},
            "copyLinearToGamma": function () {},
            "convertGammaToLinear": function () {},
            "convertLinearToGamma": function () {},
            "getHex": function () {},
            "getHexString": function () {},
            "getHSL": function () {},
            "getStyle": function () {},
            "offsetHSL": function () {},
            "add": function () {},
            "addColors": function () {},
            "addScalar": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "lerp": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {}
          }
        },
        "scale": {
          "type": {},
          "value": {}
        },
        "dashSize": {
          "type": {},
          "value": {}
        },
        "totalSize": {
          "type": {},
          "value": {}
        }
      },
      "vertexShader": {},
      "fragmentShader": {}
    },
    "depth": {
      "uniforms": {
        "mNear": {
          "type": {},
          "value": {}
        },
        "mFar": {
          "type": {},
          "value": {}
        },
        "opacity": {
          "type": {},
          "value": {}
        }
      },
      "vertexShader": {},
      "fragmentShader": {}
    },
    "normal": {
      "uniforms": {
        "opacity": {
          "type": {},
          "value": {}
        }
      },
      "vertexShader": {},
      "fragmentShader": {}
    },
    "cube": {
      "uniforms": {
        "tCube": {
          "type": {},
          "value": function () {}
        },
        "tFlip": {
          "type": {},
          "value": {}
        }
      },
      "vertexShader": {},
      "fragmentShader": {}
    },
    "equirect": {
      "uniforms": {
        "tEquirect": {
          "type": {},
          "value": function () {}
        },
        "tFlip": {
          "type": {},
          "value": {}
        }
      },
      "vertexShader": {},
      "fragmentShader": {}
    },
    "depthRGBA": {
      "uniforms": function () {},
      "vertexShader": {},
      "fragmentShader": {}
    },
    "distanceRGBA": {
      "uniforms": {
        "lightPos": {
          "type": {},
          "value": {
            "x": {},
            "y": {},
            "z": {},
            "constructor": function () {},
            "set": function () {},
            "setScalar": function () {},
            "setX": function () {},
            "setY": function () {},
            "setZ": function () {},
            "setComponent": function () {},
            "getComponent": function () {},
            "clone": function () {},
            "copy": function () {},
            "add": function () {},
            "addScalar": function () {},
            "addVectors": function () {},
            "addScaledVector": function () {},
            "sub": function () {},
            "subScalar": function () {},
            "subVectors": function () {},
            "multiply": function () {},
            "multiplyScalar": function () {},
            "multiplyVectors": function () {},
            "applyEuler": function () {},
            "applyAxisAngle": function () {},
            "applyMatrix3": function () {},
            "applyMatrix4": function () {},
            "applyProjection": function () {},
            "applyQuaternion": function () {},
            "project": function () {},
            "unproject": function () {},
            "transformDirection": function () {},
            "divide": function () {},
            "divideScalar": function () {},
            "min": function () {},
            "max": function () {},
            "clamp": function () {},
            "clampScalar": function () {},
            "clampLength": function () {},
            "floor": function () {},
            "ceil": function () {},
            "round": function () {},
            "roundToZero": function () {},
            "negate": function () {},
            "dot": function () {},
            "lengthSq": function () {},
            "length": function () {},
            "lengthManhattan": function () {},
            "normalize": function () {},
            "setLength": function () {},
            "lerp": function () {},
            "lerpVectors": function () {},
            "cross": function () {},
            "crossVectors": function () {},
            "projectOnVector": function () {},
            "projectOnPlane": function () {},
            "reflect": function () {},
            "angleTo": function () {},
            "distanceTo": function () {},
            "distanceToSquared": function () {},
            "setFromSpherical": function () {},
            "setFromMatrixPosition": function () {},
            "setFromMatrixScale": function () {},
            "setFromMatrixColumn": function () {},
            "equals": function () {},
            "fromArray": function () {},
            "toArray": function () {},
            "fromAttribute": function () {}
          }
        }
      },
      "vertexShader": {},
      "fragmentShader": {}
    }
  },
  /**
   * @constructor
   */
  "WebGLRenderer": function () {},
  "WebGLRenderTarget": function () {},
  "WebGLRenderTargetCube": function () {},
  "WebGLBufferRenderer": function () {},
  "WebGLIndexedBufferRenderer": function () {},
  "WebGLExtensions": function () {},
  "WebGLCapabilities": function () {},
  "WebGLGeometries": function () {},
  "WebGLLights": function () {},
  "WebGLObjects": function () {},
  "WebGLProgram": function () {},
  "WebGLPrograms": function () {},
  "WebGLProperties": function () {},
  "WebGLShader": function () {},
  "WebGLShadowMap": function () {},
  "WebGLState": function () {},
  "LensFlarePlugin": function () {},
  "SpritePlugin": function () {},
  "Face4": function () {},
  "Vertex": function () {},
  "GeometryUtils": {
    "merge": function () {},
    "center": function () {}
  },
  "ImageUtils": {
    "crossOrigin": {},
    "loadTexture": function () {},
    "loadTextureCube": function () {},
    "loadCompressedTexture": function () {},
    "loadCompressedTextureCube": function () {}
  },
  "Projector": function () {},
  "CanvasRenderer": function () {},
  "MeshFaceMaterial": function () {},
  "CurveUtils": {
    "tangentQuadraticBezier": function () {},
    "tangentCubicBezier": function () {},
    "tangentSpline": function () {},
    "interpolate": function () {}
  },
  "SceneUtils": {
    "createMultiMaterialObject": function () {},
    "detach": function () {},
    "attach": function () {}
  },
  "ShapeUtils": {
    "area": function () {},
    "triangulate": function () {},
    "triangulateShape": function () {},
    "isClockWise": function () {},
    "b2": function () {},
    "b3": function () {}
  },
  "Curve": function () {},
  "CurvePath": function () {},
  "Font": function () {},
  "Path": function () {},
  "Shape": function () {},
  "LineCurve": function () {},
  "QuadraticBezierCurve": function () {},
  "CubicBezierCurve": function () {},
  "SplineCurve": function () {},
  "EllipseCurve": function () {},
  "ArcCurve": function () {},
  "LineCurve3": function () {},
  "QuadraticBezierCurve3": function () {},
  "CubicBezierCurve3": function () {},
  "SplineCurve3": function () {},
  "CatmullRomCurve3": function () {},
  "ClosedSplineCurve3": function () {},
  /**
   * @param width
   * @param height
   * @param depth
   * @param widthSegments
   * @param heightSegments
   * @param depthSegments
   * @constructor
   */
  "BoxGeometry": function ( width, height, depth, widthSegments, heightSegments, depthSegments ) {},
  "CubeGeometry": function () {},
  "BoxBufferGeometry": function () {},
  "CircleGeometry": function () {},
  "CircleBufferGeometry": function () {},
  "CylinderBufferGeometry": function () {},
  "CylinderGeometry": function () {},
  "EdgesGeometry": function () {},
  "ExtrudeGeometry": function () {},
  "ShapeGeometry": function () {},
  "LatheBufferGeometry": function () {},
  "LatheGeometry": function () {},
  "PlaneGeometry": function () {},
  "PlaneBufferGeometry": function () {},
  "RingBufferGeometry": function () {},
  "RingGeometry": function () {},
  /**
   * @param radius
   * @param widthSegments
   * @param heightSegments
   * @param phiStart
   * @param phiLength
   * @param thetaStart
   * @param thetaLength
   * @constructor
   */
  "SphereGeometry": function (radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {},
  "SphereBufferGeometry": function () {},
  "TextGeometry": function () {},
  "TorusBufferGeometry": function () {},
  "TorusGeometry": function () {},
  "TorusKnotBufferGeometry": function () {},
  "TorusKnotGeometry": function () {},
  "TubeGeometry": function () {},
  "PolyhedronGeometry": function () {},
  "DodecahedronGeometry": function () {},
  "IcosahedronGeometry": function () {},
  "OctahedronGeometry": function () {},
  "TetrahedronGeometry": function () {},
  "ParametricGeometry": function () {},
  "WireframeGeometry": function () {},
  "AxisHelper": function () {},
  "ArrowHelper": function () {},
  "BoxHelper": function () {},
  "BoundingBoxHelper": function () {},
  "CameraHelper": function () {},
  "DirectionalLightHelper": function () {},
  "EdgesHelper": function () {},
  "FaceNormalsHelper": function () {},
  "GridHelper": function () {},
  "HemisphereLightHelper": function () {},
  "PointLightHelper": function () {},
  "SkeletonHelper": function () {},
  "SpotLightHelper": function () {},
  "VertexNormalsHelper": function () {},
  "WireframeHelper": function () {},
  "ImmediateRenderObject": function () {},
  "MorphBlendMesh": function () {},
  /**
   * @param [manager]
   * @constructor
   */
  "STLLoader": function ( manager ) {},
  "CSS3DObject": function () {},
  "CSS3DSprite": function () {},
  /**
   * @constructor
   */
  "CSS3DRenderer": function () {},
  /**
   * @param object
   * @param callback
   * @constructor
   */
  "VRControls": function (object, callback) {}
};

THREE.Vector3.prototype.x = 0;
THREE.Vector3.prototype.y = 0;
THREE.Vector3.prototype.z = 0;

/**
 * @type {THREE.Vector3}
 */
THREE.Camera.prototype.target = null;

THREE.Scene.prototype.add = function() {};

THREE.Euler.prototype.setFromQuaternion = function () {};
THREE.Euler.prototype.x = 0;
THREE.Euler.prototype.y = 0;
THREE.Euler.prototype.z = 0;

THREE.Quaternion.prototype.setFromEuler = function ( euler, update ) {};

THREE.Material.prototype.wireframe = false;
/**
 * @type {THREE.Texture}
 */
THREE.Material.prototype.map = null;

THREE.Texture.prototype.needsUpdate = false;

THREE.Mesh.prototype.type = '';
THREE.Mesh.prototype.visible = true;

/**
 * @type {THREE.Vector3}
 */
THREE.Mesh.prototype.position = null;

/**
 * @type {THREE.Vector3}
 */
THREE.Mesh.prototype.scale = null;

/**
 * @type {THREE.Vector3}
 */
THREE.Mesh.prototype.rotation = null;

/**
 * @type {THREE.Geometry}
 */
THREE.Mesh.prototype.geometry = null;

/**
 * @type {THREE.Material}
 */
THREE.Mesh.prototype.material = null;
THREE.Mesh.prototype.drawMode = null;

/**
 * @type {THREE.Quaternion}
 */
THREE.Mesh.prototype.quaternion = null;

THREE.Geometry.prototype.dynamic = true;
THREE.Geometry.prototype.computeVertexNormals = function() {};
THREE.Geometry.prototype.mergeVertices = function() {};

THREE.CSS3DRenderer.prototype.render = function(scene, camera) {};

THREE.WebGLRenderer.prototype.autoClearColor = true;

/**
 * @type {HTMLElement}
 */
THREE.WebGLRenderer.prototype.domElement = null;

/**
 * @param width
 * @param height
 */
THREE.WebGLRenderer.prototype.setSize = function(width, height) {};
THREE.WebGLRenderer.prototype.render = function ( scene, camera ) {};

THREE.VRControls.prototype.update = function() {};
