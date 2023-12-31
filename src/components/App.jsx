import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
    return <div>
        <Header />
        {notes.map(noteElement => <Note 
            key={noteElement.key}
            title={noteElement.title}
            content={noteElement.content}
        />)}
        <Footer/>
        </div>;    
}

export default App;