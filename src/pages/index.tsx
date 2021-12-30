import type { NextPage } from 'next'
import Image from 'next/image';
import { useState } from "react";
import React from 'react'
import styles from '../styles/Home.module.css'

type Count = {
  count: number;
}

const Home: NextPage = () => {
	const [ count, setCount ] = useState(0)
	const handleClick = (e: any) => {
		setCount(prevCount => prevCount ++);
	}

	return (
		<div>
			<div className="flex justify-center relative">
				<div className="absolute top-3/4 left-1/3 z-10 text-3xl font-sans" >
					<p className="text-white bg-red-300 rounded-2xl">大切な思いでを家族で共有しよう</p>
				</div>
				<div className="absolute top-20 left-64 z-10">
					<Image
						src={ "/hurt.png" }
						width={ 100 }
						height={ 100 }
						alt={ "" }
					/>
				</div>
				<Image 
					src={ "/4211820_s.jpg" }
					width={ 1000 }
					height={ 700 }
					alt={""}
				/>
			</div>
			<div className="mt-24">
				<div className="flex justify-center text-center">
					{/* ここのdivタグはimageタグに変更します */}
					<div className="w-96 h-96 bg-red-100 ">画像</div>
					<div className="ml-6 max-w-md">
						<h1 className="text-2xl">家族で思い出の時間を共有しましょう</h1>
						<div className="mt-4">
							<p>withでは家族の思い出の写真や動画を保存し家族間で共有できます。月毎にアルバム、整理をおこなって思い出もふりかえりが可能です。</p>
						</div>
					</div>
				</div>
				<div className="mt-24 flex justify-center text-center flex-row-reverse">
					{/* ここのdivタグはimageタグに変更します */}
					<div className="w-96 h-96 bg-red-100 ml-6">画像</div>
					<div className="max-w-md">
						<h3 className="text-2xl">写真や動画を手軽に通知できる</h3>
						<div className="mt-4">
							<p>画像や動画が保存されたら、パートナーへ自動通知してくれます。通知された動画や画像はコメントを残すことができます。</p>
						</div>
					</div>
				</div>
				{ /*
				<div>
					ここのdivタグはimageタグに変更します
					<div>画像</div>
					<div>
						<h3>家族で思い出の時間を共有しましょう</h3>
					</div>
					<div>
						<p>withでは家族の思い出の写真や動画を保存し家族間で共有できます。</p>
					</div>
				</div>
				*/}
			</div>
		</div>
	)
}

export default Home
