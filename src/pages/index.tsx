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
		</div>
	)
}

export default Home
