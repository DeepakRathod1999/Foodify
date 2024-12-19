import React from "react";
import { useRouteError ,Link} from "react-router-dom";
import '../css/error.css'
const Error = () => {
  const err = useRouteError();
  
  return (
    <div>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center"style={{textAlign:"center",marginBottom:"2px"}}>
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">Look like you're lost</h1>
                </div>

                <div className="contant_box_404 " style={{textAlign:"center"}}>
                  <h3 className="h2">{err.status}</h3>
				  

                  <p>the page you are looking for has {err.statusText}</p>
                  <p></p>
                  <Link to="/" className="link_404">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
