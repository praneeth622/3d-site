/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 src/models/tubes.glb 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('/tubes.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-162.96, -50.671, -135.423]}>
          <mesh geometry={nodes.Cylinder_3.geometry} material={nodes.Cylinder_3.material} position={[-134.391, -291.526, 199.401]} rotation={[Math.PI, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder_13.geometry} material={nodes.Cylinder_13.material} position={[-228.739, 323.094, -5.493]} rotation={[Math.PI, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder_12.geometry} material={nodes.Cylinder_12.material} position={[-420.287, -87.297, 146.11]} rotation={[Math.PI, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder_11.geometry} material={nodes.Cylinder_11.material} position={[-501.137, -115.117, -209.483]} rotation={[Math.PI, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder_2.geometry} material={nodes.Cylinder_2.material} position={[142.83, 64.034, 70.226]} rotation={[Math.PI, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder_6.geometry} material={nodes.Cylinder_6.material} position={[-359.943, 85.073, -77.064]} rotation={[0, Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder_5.geometry} material={nodes.Cylinder_5.material} position={[137.436, -199.533, -11.591]} rotation={[0, Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder_4.geometry} material={nodes.Cylinder_4.material} position={[-49.78, 24.034, -203.538]} rotation={[0, Math.PI / 2, 0]} />
          <mesh geometry={nodes.Cylinder_8.geometry} material={nodes.Cylinder_8.material} position={[430.025, -127.302, -1.911]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.Cylinder_7.geometry} material={nodes.Cylinder_7.material} position={[271.645, 280.588, -84.377]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.Cylinder_10.geometry} material={nodes.Cylinder_10.material} position={[-236.614, -315.735, 145.088]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.Cylinder_9.geometry} material={nodes.Cylinder_9.material} position={[-1.828, -315.735, 145.088]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[-124.561, 147.134, 61.863]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.Shape_115.geometry} material={nodes.Shape_115.material} position={[128.497, 26.275, -92.027]} rotation={[Math.PI, 0, 0]} />
          <mesh geometry={nodes.Shape_109.geometry} material={nodes.Shape_109.material} position={[128.497, 25.275, -92.027]} rotation={[Math.PI, 0, 0]} />
          <mesh geometry={nodes.Shape_108.geometry} material={nodes.Shape_108.material} position={[309.296, 130.797, -121.464]} rotation={[Math.PI, 0, 0]} />
          <mesh geometry={nodes.Shape_105.geometry} material={nodes.Shape_105.material} position={[-134.391, -329.019, 202.248]} rotation={[Math.PI, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_102.geometry} material={nodes.Shape_102.material} position={[-134.091, -99.786, 8.648]} rotation={[0, Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_94.geometry} material={nodes.Shape_94.material} position={[-56.528, 425.132, -6.043]} />
          <mesh geometry={nodes.Shape_93.geometry} material={nodes.Shape_93.material} position={[-56.528, 425.132, -6.043]} />
          <mesh geometry={nodes.Shape_92.geometry} material={nodes.Shape_92.material} position={[-53.507, 421.964, -9.393]} />
          <mesh geometry={nodes.Shape_91.geometry} material={nodes.Shape_91.material} position={[-53.507, 421.964, -9.393]} />
          <mesh geometry={nodes.Shape_68.geometry} material={nodes.Shape_68.material} position={[-361.302, 87.475, -77.574]} />
          <mesh geometry={nodes.Shape_67.geometry} material={nodes.Shape_67.material} position={[-435.738, 201.317, -223.545]} />
          <mesh geometry={nodes.Shape_66.geometry} material={nodes.Shape_66.material} position={[-242.085, 200.95, -67.165]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_65.geometry} material={nodes.Shape_65.material} position={[117.606, 73.597, 106.274]} />
          <mesh geometry={nodes.Shape_64.geometry} material={nodes.Shape_64.material} position={[-157.922, -267.984, 49.229]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_63.geometry} material={nodes.Shape_63.material} position={[-17.64, -397.099, 52.059]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_62.geometry} material={nodes.Shape_62.material} position={[217.659, -241.971, 52.059]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_61.geometry} material={nodes.Shape_61.material} position={[366.891, -126.26, -1.798]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_114.geometry} material={nodes.Shape_114.material} position={[291.457, 71.96, -2.057]} />
          <mesh geometry={nodes.Shape_113.geometry} material={nodes.Shape_113.material} position={[291.457, 71.96, -2.057]} />
          <mesh geometry={nodes.Shape_60.geometry} material={nodes.Shape_60.material} position={[291.457, 71.96, -2.057]} />
          <mesh geometry={nodes.Shape_110.geometry} material={nodes.Shape_110.material} position={[118.929, 72.134, 181.116]} />
          <mesh geometry={nodes.Shape_59.geometry} material={nodes.Shape_59.material} position={[118.929, 72.134, 181.116]} />
          <mesh geometry={nodes.Shape_76.geometry} material={nodes.Shape_76.material} position={[-466.899, 141.388, -153.46]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_87.geometry} material={nodes.Shape_87.material} position={[-466.899, 141.388, -153.46]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_58.geometry} material={nodes.Shape_58.material} position={[-466.899, 141.388, -153.46]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_111.geometry} material={nodes.Shape_111.material} position={[-25.257, 291.724, -153.532]} />
          <mesh geometry={nodes.Shape_97.geometry} material={nodes.Shape_97.material} position={[-25.257, 291.724, -153.532]} />
          <mesh geometry={nodes.Shape_57.geometry} material={nodes.Shape_57.material} position={[-25.257, 291.724, -153.532]} />
          <mesh geometry={nodes.Shape_84.geometry} material={nodes.Shape_84.material} position={[376.156, 70.277, 66.544]} />
          <mesh geometry={nodes.Shape_99.geometry} material={nodes.Shape_99.material} position={[376.156, 70.277, 66.544]} />
          <mesh geometry={nodes.Shape_74.geometry} material={nodes.Shape_74.material} position={[376.156, 70.277, 66.544]} />
          <mesh geometry={nodes.Shape_98.geometry} material={nodes.Shape_98.material} position={[376.156, 70.396, 66.544]} />
          <mesh geometry={nodes.Shape_56.geometry} material={nodes.Shape_56.material} position={[376.156, 70.277, 66.544]} />
          <mesh geometry={nodes.Shape_55.geometry} material={nodes.Shape_55.material} position={[367.354, -149.661, -80.657]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_73.geometry} material={nodes.Shape_73.material} position={[94.66, -246.452, 110.226]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_79.geometry} material={nodes.Shape_79.material} position={[94.717, -246.452, 110.226]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_54.geometry} material={nodes.Shape_54.material} position={[158.844, -246.452, 110.226]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_107.geometry} material={nodes.Shape_107.material} position={[-106.119, -114.934, 110.217]} />
          <mesh geometry={nodes.Shape_53.geometry} material={nodes.Shape_53.material} position={[-106.119, -114.934, 110.217]} />
          <mesh geometry={nodes.Shape_100.geometry} material={nodes.Shape_100.material} position={[-420.287, -230.207, 145.226]} />
          <mesh geometry={nodes.Shape_101.geometry} material={nodes.Shape_101.material} position={[-420.287, -175.002, 145.226]} />
          <mesh geometry={nodes.Shape_52.geometry} material={nodes.Shape_52.material} position={[-420.287, -230.207, 145.226]} />
          <mesh geometry={nodes.Shape_80.geometry} material={nodes.Shape_80.material} position={[231.889, -316.241, 178.115]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_78.geometry} material={nodes.Shape_78.material} position={[231.889, -316.241, 178.115]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_51.geometry} material={nodes.Shape_51.material} position={[231.889, -316.241, 178.115]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_49.geometry} material={nodes.Shape_49.material} position={[143.343, 67.671, 70.274]} />
          <mesh geometry={nodes.Shape_86.geometry} material={nodes.Shape_86.material} position={[-69.894, -23.759, 182.371]} />
          <mesh geometry={nodes.Shape_85.geometry} material={nodes.Shape_85.material} position={[-39.473, -23.759, 182.371]} />
          <mesh geometry={nodes.Shape_70.geometry} material={nodes.Shape_70.material} position={[-381.816, -23.759, 182.371]} />
          <mesh geometry={nodes.Shape_48.geometry} material={nodes.Shape_48.material} position={[-381.816, -23.759, 182.371]} />
          <mesh geometry={nodes.Shape_47.geometry} material={nodes.Shape_47.material} position={[-50.64, 27.419, -213.407]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_69.geometry} material={nodes.Shape_69.material} position={[445.523, 211.29, -4.593]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_46.geometry} material={nodes.Shape_46.material} position={[445.523, 211.29, -4.593]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Shape_75.geometry} material={nodes.Shape_75.material} position={[75.019, 211.29, -77.689]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shape_45.geometry} material={nodes.Shape_45.material} position={[75.019, 211.29, -77.689]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shape_71.geometry} material={nodes.Shape_71.material} position={[-134.084, 54.753, -26.898]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_42.geometry} material={nodes.Shape_42.material} position={[23.681, -343.725, -11.596]} />
          <mesh geometry={nodes.Shape_41.geometry} material={nodes.Shape_41.material} position={[162.094, -213.52, -11.591]} />
          <mesh geometry={nodes.Shape_88.geometry} material={nodes.Shape_88.material} position={[111.432, 146.828, -11.904]} />
          <mesh geometry={nodes.Shape_40.geometry} material={nodes.Shape_40.material} position={[111.432, 146.828, -14.523]} />
          <mesh geometry={nodes.Shape_81.geometry} material={nodes.Shape_81.material} position={[-349.132, -8.495, 61.781]} />
          <mesh geometry={nodes.Shape_82.geometry} material={nodes.Shape_82.material} position={[-349.132, -8.495, 61.781]} />
          <mesh geometry={nodes.Shape_39.geometry} material={nodes.Shape_39.material} position={[-349.132, -8.495, 61.781]} />
          <mesh geometry={nodes.Shape_112.geometry} material={nodes.Shape_112.material} position={[-348.82, -150.096, 65.789]} />
          <mesh geometry={nodes.Shape_106.geometry} material={nodes.Shape_106.material} position={[-348.82, -150.096, 65.789]} />
          <mesh geometry={nodes.Shape_38.geometry} material={nodes.Shape_38.material} position={[-348.82, -150.096, 65.789]} />
          <mesh geometry={nodes.Shape_37.geometry} material={nodes.Shape_37.material} position={[-256.497, -223.894, -69.662]} />
          <mesh geometry={nodes.Shape_95.geometry} material={nodes.Shape_95.material} position={[-121.654, 232.117, -209.214]} />
          <mesh geometry={nodes.Shape_36.geometry} material={nodes.Shape_36.material} position={[-121.654, 232.117, -209.214]} />
          <mesh geometry={nodes.Shape_83.geometry} material={nodes.Shape_83.material} position={[249.777, 371.485, 26.934]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shape_35.geometry} material={nodes.Shape_35.material} position={[249.777, 371.485, 26.934]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shape_34.geometry} material={nodes.Shape_34.material} position={[420.282, 222.824, -130.702]} rotation={[0, Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_33.geometry} material={nodes.Shape_33.material} position={[143.315, -224.314, -130.608]} />
          <mesh geometry={nodes.Shape_32.geometry} material={nodes.Shape_32.material} position={[143.392, -224.314, -203.505]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shape_104.geometry} material={nodes.Shape_104.material} position={[-224.341, 281.178, -110.818]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_30.geometry} material={nodes.Shape_30.material} position={[-224.341, 281.178, -110.818]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_27.geometry} material={nodes.Shape_27.material} position={[-215.836, -80.665, -134.476]} rotation={[Math.PI, 0, 0]} />
          <mesh geometry={nodes.Shape_77.geometry} material={nodes.Shape_77.material} position={[309.733, -327.584, -134.354]} rotation={[Math.PI, 0, 0]} />
          <mesh geometry={nodes.Shape_26.geometry} material={nodes.Shape_26.material} position={[309.733, -327.584, -134.354]} rotation={[Math.PI, 0, 0]} />
          <mesh geometry={nodes.Shape_96.geometry} material={nodes.Shape_96.material} position={[358.778, -40.316, 181.11]} />
          <mesh geometry={nodes.Shape_103.geometry} material={nodes.Shape_103.material} position={[358.778, -40.316, 181.11]} />
          <mesh geometry={nodes.Shape_25.geometry} material={nodes.Shape_25.material} position={[358.778, -40.316, 181.11]} />
          <mesh geometry={nodes.Shape_24.geometry} material={nodes.Shape_24.material} position={[218.727, -40.324, -193.146]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Shape_23.geometry} material={nodes.Shape_23.material} position={[59.407, -157.446, -12.48]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_22.geometry} material={nodes.Shape_22.material} position={[-258.105, -213.842, -12.157]} />
          <mesh geometry={nodes.Shape_21.geometry} material={nodes.Shape_21.material} position={[-258.113, -21.408, 223.442]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Shape_20.geometry} material={nodes.Shape_20.material} position={[-258.105, 139.135, 138.471]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} />
        </group>
        <directionalLight intensity={0.7} decay={2} rotation={[-0.084, 0.578, 0.153]} target={nodes.Directional_Light.target}>
          <primitive object={nodes.Directional_Light.target} position={[0, 0, -1]} />
        </directionalLight>
        <PerspectiveCamera makeDefault={false} far={100000} near={70} fov={45} position={[37.481, -206.27, 1680.73]} rotation={[-0.037, -0.075, -0.003]} />
      </group>
    </group>
  )
}

useGLTF.preload('/tubes.glb')
