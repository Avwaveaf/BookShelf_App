export const CategoryItem = ({id,title, imgUrl, body }) => { 
    return (
        <>
        <div className="category-container" key={id}>
        <div className="background-image-container" style={{backgroundImage:`url(${imgUrl})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}} >
          
        
        <div className="category-body-container">
          
        <h2>{title}</h2>
          <p>See details</p>
          <p>{ body?body:"" }</p>
          </div>
          </div>
      </div>
    
        </>
    );
};