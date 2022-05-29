import React, { useEffect, useRef } from 'react'

export const SubmitImage = () => {

  let videoRef = useRef(null)
  let photoRef = useRef(null)


  const getUserCamera = () => {
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    })
      .then((stream) => {
        let video = videoRef.current
        video.srcObject = stream
        video.play()
      })
      .catch((error) => { console.log(error) })
  }

  //take photo submitted by the user
  const takePhoto = () => {
    let width = 1280
    let height = width / (16 / 9)
    let photo = photoRef.current
    let video = videoRef.current

    photo.width = width
    photo.height = height

    let ctx = photo.getContext('2d')
    ctx.drawImage(video,0,0,photo.width,photo.height)
  }

  useEffect(() => {
    getUserCamera()
  }, [videoRef])

  return (
    <div className='m-8 p-4'>
      <div className='flex justify-center text-3xl font-bold text-center mt-6 mb-10'> Register your face</div>
      <div className='flex justify-center text-md pb-8 text-slate-800 text-center'>Position your face in the center of the frame in good lighting, and click submit.</div>
      <video className='container mx-auto px-96' ref={videoRef}></video>
      <div className='flex justify-center m-8'>
        <button className='rounded-full text-white bg-indigo-400 hover:bg-indigo-600 duration-100 p-4 px-8'>Submit</button>
      </div>
    </div>
  )
}



