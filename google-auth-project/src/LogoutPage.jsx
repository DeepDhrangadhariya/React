import React from 'react'

function LogoutPage({HO, Email, Image}) {
  return (
    <div>
        <div className="logout-container">
            <div className="logout-box">
                <div className="profile-info">
                    <img id="profile-pic" src={Image} alt="Not Found"/>
                    {console.log(Image)}
                    <p id="email">{Email}</p>
                </div>
                <h2>You are logged in</h2>
                <button className="logout-button" onClick={HO}>Sign Out</button>
            </div>
        </div>
    </div>
  )
}

export default LogoutPage