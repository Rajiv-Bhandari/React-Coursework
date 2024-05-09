import Header from "../header/Header";
import Sidebar from "../sidebar/sidebar";


export default function singlepost() {
  return (
    <>
    <Header/>
    <div className="container">
        <div className="row">
          <div className="col-lg-8 my-4">
          <div >
                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1715174753~exp=1715178353~hmac=154409cdeabb627619eb694fdac90d51b415da63650e5dd0ee975ae597de8bcf&w=1060" alt="blog-img" width="100%" className="rounded-2"/>
          </div>
          <p class= "text-center mt-2 fw-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis dolo
          </p>
          <div className="d-flex justify-content-between my-2">
            <div>
              Author: Ritiks
            </div>
            <div>1 hour ago</div>

          </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel explicabo, et facere quaerat, accusamus velit ad facilis quos magnam fugit at aperiam illo delectus rerum consequatur. Voluptas, quisquam utLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel explicabo, et facere quaerat, accusamus velit ad facilis quos magnam fugit at aperiam illo delectus rerum consequatur. Voluptas, quisquam utLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel explicabo, et facere quaerat, accusamus velit ad facilis quos magnam fugit at aperiam illo delectus rerum consequatur. Voluptas, quisquam ut

          </p>
          <div class="detailBox">
    <div class="titleBox">
      <label>Comment Box</label>
        <button type="button" class="close" aria-hidden="true">&times;</button>
    </div>
    <div class="commentBox">
        
        <p class="taskDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div class="actionBox">
        <ul class="commentList">
            <li>
                <div class="commenterImage">
                  <img src="http://placekitten.com/50/50" />
                </div>
                <div class="commentText">
                    <p class="">Hello this is a test comment.</p> <span class="date sub-text">on March 5th, 2014</span>

                </div>
            </li>
            <li>
                <div class="commenterImage">
                  <img src="http://placekitten.com/45/45" />
                </div>
                <div class="commentText">
                    <p class="">Hello this is a test comment and this comment is particularly very long and it goes on and on and on.</p> <span class="date sub-text">on March 5th, 2014</span>

                </div>
            </li>
            <li>
                <div class="commenterImage">
                  <img src="http://placekitten.com/40/40" />
                </div>
                <div class="commentText">
                    <p class="">Hello this is a test comment.</p> <span class="date sub-text">on March 5th, 2014</span>

                </div>
            </li>
        </ul>
        <form class="form-inline" role="form">
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Your comments" />
            </div>
            <div class="form-group">
                <button class="btn btn-default">Add</button>
            </div>
        </form>
    </div>
</div>
            
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>


    </>
  )
}
 