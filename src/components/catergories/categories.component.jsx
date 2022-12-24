import Masonry from "react-masonry-css";
import { CategoryItem } from "../category-item/category-item.component";
import "./categories.styles.scss"
export const Catergories = () => { 
    const categories = [
        {
          id: 1,
          title: "Self-Improvement",
          
          imgUrl:"https://i.ibb.co/K04HfF9/lala-azizli-OFZUae-YKP3k-unsplash.jpg",
          body: "A self-help book is one that is written with the intention to instruct its readers on solving personal problems."
        },
        {
          id: 2,
          title: "Social",
          imgUrl:"https://i.ibb.co/zfP0wSS/priscilla-du-preez-n-F8xh-LMmg0c-unsplash.jpg"
          ,
          body: "The social protest novel is a form of social novel which places an emphasis on the idea of social change, while the proletarian novel is a political form of the social protest novel which may emphasize revolution."
        },
        {
          id: 3,
          title: "Fiction",
          imgUrl:"https://i.ibb.co/SKr7mB9/suad-kamardeen-t-Uwetqva-TX0-unsplash.jpg",
          body: "refers to literature created from the imagination. Mysteries, science fiction, romance, fantasy, chick lit, crime thrillers are all fiction genres."
        },
        {
          id: 4,
          title: "Science",
          imgUrl:"https://i.ibb.co/D9gSRwT/hal-gatewood-Ogvq-XGL7-XO4-unsplash.jpg",
          body: "Scientific literature comprises scholarly publications that report original empirical and theoretical work in the natural and social sciences. Within an academic field, scientific literature is often referred to as the literature."
        },
        {
          id: 6,
          title: "Computer Science",
          imgUrl:"https://i.ibb.co/tKFS9Cp/radowan-nakif-rehan-c-Yyqhdb-J9-TI-unsplash.jpg",
          body: "Books in the computer nonfiction genre are about the technology, application, function, and maintenance of computers. The books in this genre are designed to help people learn and understand the function and operation of a computer"
        }, {
          id: 7,
          title: "education",
          imgUrl:"https://i.ibb.co/HpL4ny3/brooke-cagle-g1-Kr4-Ozfoac-unsplash.jpg",
          body: "A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions."
        }, {
          id: 8,
          title: "Philosphy",
          imgUrl:"https://i.ibb.co/JmF4DmT/kenny-eliason-2-RRq1-BHPq4-E-unsplash.jpg",
          body: "Books in the philosophy nonfiction genre are about the fundamental nature of knowledge, reality, and existence as an academic discipline. The books in this genre also explore fundamental truths about one's self, the world, and their relationships."
        },
        {
          id: 9,
          title: "Mystery",
          imgUrl:"https://i.ibb.co/McB0z4M/kirklai-6-Ptwy-n-Dno-E-unsplash.jpg",
          body: "Mystery is a fiction genre where the nature of an event, usually a murder or other crime, remains mysterious until the end of the story."
        }
      ];
    
    const breakpointsMasonry = {
        default: 4,
        1100: 2,
        700:1
      }
    return (<div className="categories-container">
    
    <Masonry
    breakpointCols={breakpointsMasonry}
    className="categories-masonry-grid"
    columnClassName="categories-grid_column"
    >
    { 
      categories.map(({ title, id, body, imgUrl}) => {
        return (
            <CategoryItem key={id} title={title} id={id} body={body} imgUrl={imgUrl } />
          
        )

       })
    }
    </Masonry>


  </div>)
};