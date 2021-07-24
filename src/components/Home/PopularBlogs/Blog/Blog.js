import React from 'react';

const cardText = {
    height: "180px",
    overflowY: "scroll",
    fontSize: "15px",
    fontWeight: "400",
    color: "gray",
}

const Blog = () => {
    return (
        <div className="container d-flex justify-content-around align-items-center">
            <div className="card" style={{ width: '350px' }}>
                <img src="https://i.ibb.co/Sx7CK5v/blog-1.jpg" className="card-img-top" alt="blog-1" />
                <div className="card-body">
                    <h5 className="card-title">English Breakfast Tea With Tasty Donut Desserts</h5>
                    <p className="card-text text-justify" style={cardText}>
                        Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales
                        Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales
                    </p>
                </div>
            </div>

            <div className="card" style={{ width: '350px' }}>
                <img src="https://i.ibb.co/7kv87c9/blog-2.jpg" className="card-img-top" alt="blog-2" />
                <div className="card-body">
                    <h5 className="card-title">The Problem With Typefaces on the Web</h5>
                    <p className="card-text text-justify" style={cardText}>
                        Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales
                        Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales
                        Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales
                    </p>
                </div>
            </div>


            <div className="card" style={{ width: '350px' }}>
                <img src="https://i.ibb.co/mtddmCW/blog-3.jpg" className="card-img-top" alt="blog-3" />
                <div className="card-body">
                    <h5 className="card-title">But I must explain to you how all this mistaken idea</h5>
                    <p className="card-text text-justify" style={cardText}>
                        Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales
                        Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;