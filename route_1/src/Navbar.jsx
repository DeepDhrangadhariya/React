// import React from 'react'
// import { NavLink } from 'react-router-dom'


// function Navbar() {
//   return (
//     <div>
//         <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" 
//         style={{
//           '--bs-nav-link-color': 'var(--bs-white)',
//           '--bs-nav-pills-link-active-color': 'var(--bs-primary)',
//           '--bs-nav-pills-link-active-bg': 'var(--bs-white)'}}>
//   <li className="nav-item" role="presentation">
//     <NavLink to="/" className="nav-link rounded-5" activeClassName="active" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</NavLink>
//   </li>
//   <li className="nav-item" role="presentation">
//     <NavLink to="/AddPost" className="nav-link rounded-5" activeClassName="active" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Add Post</NavLink>
//   </li>
//   <li className="nav-item" role="presentation">
//     <NavLink to="/EditPost" className="nav-link rounded-5"  activeClassName="active" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Edit Post</NavLink>
//   </li>
// </ul>
//     </div>
//   )
// }

// export default Navbar

// import React from 'react'
// import { NavLink } from 'react-router-dom'

// function Navbar() {
//   return (
//     <div>
//       <ul
//         className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
//         id="pillNav2"
//         role="tablist"
//         style={{
//           '--bs-nav-link-color': 'var(--bs-white)',
//           '--bs-nav-pills-link-active-color': 'var(--bs-primary)',
//           '--bs-nav-pills-link-active-bg': 'var(--bs-white)'
//         }}
//       >
//         <li className="nav-item" role="presentation">
//           <NavLink
//             to="/"
//             className="nav-link rounded-5"
//             activeClassName="active"
//             id="home-tab2"
//             data-bs-toggle="tab"
//             role="tab"
//             aria-selected="true"
//           >
//             Home
//           </NavLink>
//         </li>
//         <li className="nav-item" role="presentation">
//           <NavLink
//             to="/AddPost"
//             className="nav-link rounded-5"
//             activeClassName="active"
//             id="profile-tab2"
//             data-bs-toggle="tab"
//             role="tab"
//             aria-selected="false"
//           >
//             Add Post
//           </NavLink>
//         </li>
//         <li className="nav-item" role="presentation">
//           <NavLink
//             to="/EditPost"
//             className="nav-link rounded-5"
//             activeClassName="active"
//             id="contact-tab2"
//             data-bs-toggle="tab"
//             role="tab"
//             aria-selected="false"
//           >
//             Edit Post
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Navbar



import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul
        className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
        id="pillNav2"
        role="tablist"
        style={{
          '--bs-nav-link-color': 'var(--bs-white)',
          '--bs-nav-pills-link-active-color': 'var(--bs-primary)',
          '--bs-nav-pills-link-active-bg': 'var(--bs-white)'
        }}
      >
        <li className="nav-item" role="presentation">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "nav-link active rounded-5" : "nav-link rounded-5"}
            id="home-tab2"
            role="tab"
            aria-selected="true"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item" role="presentation">
          <NavLink
            to="/AddPost"
            className={({ isActive }) => isActive ? "nav-link active rounded-5" : "nav-link rounded-5"}
            id="profile-tab2"
            role="tab"
            aria-selected="false"
          >
            Add Post
          </NavLink>
        </li>
        <li className="nav-item" role="presentation">
          <NavLink
            to="/EditPost"
            className={({ isActive }) => isActive ? "nav-link active rounded-5" : "nav-link rounded-5"}
            id="contact-tab2"
            role="tab"
            aria-selected="false"
          >
            Edit Post
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
