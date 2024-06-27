const heading =React.createElement("h1",
    //this object contain attributes
     {id:"heading"}, 
     "Hello World from React");
     //Every element has props object that contain attributes and its content, store contain as its children
     //props={id:"heading",children:"Hello World from React"}
     //console.log(heading); -- object
     //when we do here it give object not tag 
 //we put this heading inside div so create div as root so all code render inside this div
//create root to the tag element where we want to put stuff
const root=ReactDOM.createRoot(document.getElementById("root"));
//render method convert object to tag and put in div
root.render(heading);
   