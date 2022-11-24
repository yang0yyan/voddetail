import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default {
  name: "gameView",
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      mesh: null,
    };
  },
  mounted() {
    this.setData();
  },
  created() {},
  methods: {
    setData() {
      /**
       * 创建场景对象Scene
       */
      this.scene = new THREE.Scene();
      /**
       * 创建网格模型
       */
      this.add();

      // 辅助三维坐标系
      var axisHelper = new THREE.AxesHelper(250);
      this.scene.add(axisHelper);

      /**
       * 光源设置
       */
      //点光源
      var point = new THREE.PointLight(0xffffff);
      point.position.set(400, 200, 300); //点光源位置
      this.scene.add(point); //点光源添加到场景中
      //环境光
      var ambient = new THREE.AmbientLight(0x000000);
      this.scene.add(ambient);
      // console.log(scene)
      // console.log(scene.children)
      /**
       * 相机设置
       */
      var width = window.innerWidth; //窗口宽度
      var height = window.innerHeight; //窗口高度
      var k = width / height; //窗口宽高比
      var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
      //创建相机对象
      this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      this.camera.position.set(200, 300, 200); //设置相机位置
      this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)

      /**
       * 创建渲染器对象
       */
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height); //设置渲染区域尺寸
      this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
      document.getElementById("gameView").appendChild(this.renderer.domElement); //body元素中插入canvas对象
      //执行渲染操作   指定场景、相机作为参数
      // this.renderer.render(this.scene, this.camera);
      new OrbitControls(this.camera, this.renderer.domElement); //创建控件对象
      // controls.addEventListener("change", this.render);

      this.T0 = new Date(); //上次时间
      this.render();
    },
    render() {
      // let T1 = new Date(); //本次时间
      // let t = T1 - this.T0; //时间差
      // this.T0 = T1; //把本次时间赋值给上次时间
      this.renderer.render(this.scene, this.camera); //执行渲染操作
      // this.mesh.rotateY(0.001 * t); //每次绕y轴旋转0.01弧度
      requestAnimationFrame(this.render); //请求再次执行渲染函数render
    },

    add() {
      var geometry = new THREE.BufferGeometry(); //声明一个缓冲几何体对象

      //类型数组创建顶点位置position数据
      var vertices = new Float32Array([
        0,
        0,
        0, //顶点1坐标
        50,
        0,
        0, //顶点2坐标
        0,
        100,
        0, //顶点3坐标

        0,
        0,
        0, //顶点4坐标
        0,
        0,
        100, //顶点5坐标
        50,
        0,
        0, //顶点6坐标
      ]);
      // 创建属性缓冲区对象
      var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组
      geometry.attributes.position = attribue;

      //类型数组创建顶点颜色color数据
      var colors = new Float32Array([
        1,
        0,
        0, //顶点1颜色
        0,
        1,
        0, //顶点2颜色
        0,
        0,
        1, //顶点3颜色

        1,
        1,
        0, //顶点4颜色
        0,
        1,
        1, //顶点5颜色
        1,
        0,
        1, //顶点6颜色
      ]);
      // 设置几何体attributes属性的颜色color属性
      geometry.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB

      var normals = new Float32Array([
        0,
        0,
        1, //顶点1法向量
        0,
        0,
        1, //顶点2法向量
        0,
        0,
        1, //顶点3法向量

        0,
        1,
        0, //顶点4法向量
        0,
        1,
        0, //顶点5法向量
        0,
        1,
        0, //顶点6法向量
      ]);
      // 设置几何体attributes属性的位置normal属性
      geometry.attributes.normal = new THREE.BufferAttribute(normals, 3);

      // 三角面(网格)渲染模式
      var material = new THREE.MeshBasicMaterial({
        color: 0x0000ff, //三角面颜色
        vertexColors: true,
        side: THREE.DoubleSide, //两面可见
      }); //材质对象
      var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      // //材质对象
      // var material = new THREE.PointsMaterial({
      //   // 使用顶点颜色数据渲染模型，不需要再定义color属性
      //   // color: 0xff0000,
      //   vertexColors: THREE.Material.VertexColors, //以顶点颜色为准
      //   size: 10.0, //点对象像素尺寸
      // });
      // // 点渲染模式  点模型对象Points
      // var points = new THREE.Points(geometry, material); //点模型对象
      this.scene.add(mesh); //点对象添加到场景
    },
  },
};
