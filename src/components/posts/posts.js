// import "./posts.css";
// import Sidebar from "../sidebar/sidebar";
// import Header from "../header/Header"; 


// export default function Post() {
//   return(
//   <>
//   <Header />
//    <div className="posts my-3">
//     <div className="row justify-content-between px-2">
//       <div className="col-lg-4 mb-2">
//         <div >
//           <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1715174753~exp=1715178353~hmac=154409cdeabb627619eb694fdac90d51b415da63650e5dd0ee975ae597de8bcf&w=1060" alt="blog-img" width="100%" className="rounded-2"/>
//         </div>
//         <p className="blog-topic mb-1">Music Life</p>
//         <h5 className="blog-topic">
//           Lorem ipsum dolor  adipisicing elit.
//         </h5>
//         <p className="blog-topic">1 hour ago</p>

//         <p className="blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis dolore omnis. Ullam minima, expedita quibusdam distinctio voluptates sapiente placeat recusandae reiciendis iste, aliquam in. Impedit aspernatur repudiandae optio ex!</p>
//       </div>
//       <div className="col-lg-4">
//         <div >
//           <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1715174753~exp=1715178353~hmac=154409cdeabb627619eb694fdac90d51b415da63650e5dd0ee975ae597de8bcf&w=1060" alt="blog-img" width="100%" className="rounded-2"/>
//         </div>
//         <p className="blog-topic mb-1">Music Life</p>
//         <h5 className="blog-topic">
//           Lorem ipsum dolor  adipisicing elit.
//         </h5>
//         <p className="blog-topic">1 hour ago</p>

//         <p className="blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis dolore omnis. Ullam minima, expedita quibusdam distinctio voluptates sapiente placeat recusandae reiciendis iste, aliquam in. Impedit aspernatur repudiandae optio ex!</p>
//       </div>
//       <div className="col-lg-4">
//         <div >
//           <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1715174753~exp=1715178353~hmac=154409cdeabb627619eb694fdac90d51b415da63650e5dd0ee975ae597de8bcf&w=1060" alt="blog-img" width="100%" className="rounded-2"/>
//         </div>
//         <p className="blog-topic mb-1">Music Life</p>
//         <h5 className="blog-topic">
//           Lorem ipsum dolor  adipisicing elit.
//         </h5>
//         <p className="blog-topic">1 hour ago</p>

//         <p className="blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis dolore omnis. Ullam minima, expedita quibusdam distinctio voluptates sapiente placeat recusandae reiciendis iste, aliquam in. Impedit aspernatur repudiandae optio ex!</p>
//       </div>
//       <div className="col-lg-4">
//         <div >
//           <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1715174753~exp=1715178353~hmac=154409cdeabb627619eb694fdac90d51b415da63650e5dd0ee975ae597de8bcf&w=1060" alt="blog-img" width="100%" className="rounded-2"/>
//         </div>
//         <p className="blog-topic mb-1">Music Life</p>
//         <h5 className="blog-topic">
//           Lorem ipsum dolor  adipisicing elit.
//         </h5>
//         <p className="blog-topic">1 hour ago</p>

//         <p className="blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis dolore omnis. Ullam minima, expedita quibusdam distinctio voluptates sapiente placeat recusandae reiciendis iste, aliquam in. Impedit aspernatur repudiandae optio ex!</p>
//       </div>
//       <div className="col-lg-4">
//   <Sidebar/>
//   </div>
//     </div>
//   </div>
 
   


  
//   </>
//   );
// }
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/Header';
import './posts.css';
import { Link } from 'react-router-dom';


export default function Post() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="posts my-3">
              <h4 className='text-center mb-3' >Blogs</h4>
              <div className="row justify-content-center px-2">
                <div className="col-lg-6 mb-2">
                <div className="blog-border">
                <Link to="/post/singlepost/singlepost"> {/* Add Link here */}
                    <div>
                      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1715174753~exp=1715178353~hmac=154409cdeabb627619eb694fdac90d51b415da63650e5dd0ee975ae597de8bcf&w=1060" alt="blog-img" width="100%" className="rounded-2" />
                    </div>
                  </Link>
                  <p className="blog-topic mb-1">Music Life</p>
                  <h5 className="blog-topic">
                    Lorem ipsum dolor  adipisicing elit.
                  </h5>
                  <p className="blog-topic">1 hour ago</p>

                  <p className="blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis dolore omnis. Ullam minima, expedita quibusdam distinctio voluptates sapiente placeat recusandae reiciendis iste, aliquam in. Impedit aspernatur repudiandae optio ex!</p>
                </div>
                
                </div>
                <div className="col-lg-6 mb-2">
                <div className="blog-border">
                <Link to="/post/singlepost/singlepost"> {/* Add Link here */}
                    <div>
                      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1715174753~exp=1715178353~hmac=154409cdeabb627619eb694fdac90d51b415da63650e5dd0ee975ae597de8bcf&w=1060" alt="blog-img" width="100%" className="rounded-2" />
                    </div>
                  </Link>
                  <p className="blog-topic mb-1">Music Life</p>
                  <h5 className="blog-topic">
                    Lorem ipsum dolor  adipisicing elit.
                  </h5>
                  <p className="blog-topic">1 hour ago</p>

                  <p className="blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis dolore omnis. Ullam minima, expedita quibusdam distinctio voluptates sapiente placeat recusandae reiciendis iste, aliquam in. Impedit aspernatur repudiandae optio ex!</p>
                </div>
                
                </div>
                <div className="col-lg-6 mb-2">
                <div className="blog-border">
                <Link to="/post/singlepost/singlepost"> {/* Add Link here */}
                    <div>
                      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1715174753~exp=1715178353~hmac=154409cdeabb627619eb694fdac90d51b415da63650e5dd0ee975ae597de8bcf&w=1060" alt="blog-img" width="100%" className="rounded-2" />
                    </div>
                  </Link>
                  <p className="blog-topic mb-1">Music Life</p>
                  <h5 className="blog-topic">
                    Lorem ipsum dolor  adipisicing elit.
                  </h5>
                  <p className="blog-topic">1 hour ago</p>

                  <p className="blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis dolore omnis. Ullam minima, expedita quibusdam distinctio voluptates sapiente placeat recusandae reiciendis iste, aliquam in. Impedit aspernatur repudiandae optio ex!</p>
                </div>
                
                </div>


                
              
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
