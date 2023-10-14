import { useState } from "react";
import './style.css'
function WordCounter() {
    const [state, setState] = useState({
        wordCount: 0
    });

    const handleKeyPress = (e) => {
        const count = e.target.value;

        const countWords = (count) => {
            if (count.length === 0) {
                return 0;
            } else {
                count = count.replace(/(^\s*)|(\s*$)/gi, "");
                count = count.replace(/[ ]{2,}/gi, " ");
                count = count.replace(/\n /, "\n");
                return count.split(' ').length;
            }
        }

        setState({
            wordCount: countWords(count),
          
        });
    }
    
    return (
        <center >
            <form  >
                <div class="row" id="style1">
                    <div class=" col-md-12 col-lg-12 col-sm-12 border-bottom-0 " >
                       <h1 id="style2">Responsive Paragraph Word <br></br> Counter</h1>
                        <textarea id="text" onChange={handleKeyPress} rows="5" cols="70" > </textarea>
                        <br></br>
                        <br></br>
                        <p id="count" class="ms-3">Word Count:  {state.wordCount}</p>
                      
                    </div>
                </div>
            </form>
        </center>
    );


}
export default WordCounter;



