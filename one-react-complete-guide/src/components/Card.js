// (27)   *******10  this is a card component that we want to make wrapper like a <div> acts as we can see there are similar css properties in Expenses.css and ExpesesItem.css like grey shadow and roudned corner. But we cant make use of card component as wrapper directly / we need to use props.children to make use as shown below

import "./Card.css"; // (32) go to Card.css

function Card (props) {    // (28) although no attritube/parameter was passed while using it in ExpensesItem or Expenses.js still we write props , but listen jo hamen className likha tha Expenses/ Expenses.js main <Card ClassName="Expenes-item"> (go and see in ******12 Expenses.js and *******11 ExpensesItem.js) vo <div> ke liye ek parameter hai pr iske liye vo ek prop hai hame define krna pdega ki vo className kya kre or kaise CSS add kre extra wali

    const classes = 'card ' + props.className;    //(33)  ab hame jo class ka name aya hai prop main usko div ke liye pass bhi to krna hoga neeche to 'card' jo hai vo card css wali default ko daldega or baki props.className baki jo nyi css import , prop ke trhougth ayi hai usko daldega. so like example className= {card expense-item expense-date__day}

    return (
        <div className={classes}> {props.children} </div> 
        // (31)  props.children se ye wrapper ki trha behave krega or isko ab hum div ki trha use kr skte hai vrna kuch nhi show hoga iske bina , ye sara child elements lekr show krta hai
    );

}

export default Card;

