import React from 'react'
import User from './User';

function Users() {
  return (
    <div className='overflow-y-scroll' style={{maxHeight: "calc(80vh)"}}>
        <User src="https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg" email="XyzRandom@gmail.com" name="Random"/>
        <User src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" email="XyzRandom@gmail.com" name="Random"/>
        <User email="XyzRandom@gmail.com" name="Random"/>
        <User email="XyzRandom@gmail.com" name="Random"/>
        <User email="XyzRandom@gmail.com" name="Random"/>
        <User email="XyzRandom@gmail.com" name="Random"/>
        <User email="XyzRandom@gmail.com" name="Random"/>
        <User email="XyzRandom@gmail.com" name="Random"/>
        <User email="XyzRandom@gmail.com" name="Random"/>
        <User email="XyzRandom@gmail.com" name="Random"/>
        <User email="XyzRandom@gmail.com" name="Random"/>
        <User email="XyzRandom@gmail.com" name="Random"/>
    </div>
  )
}

export default Users