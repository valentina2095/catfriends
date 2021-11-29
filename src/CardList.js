import React from "react";
import Card from "./Card";

function CardList({ robots }) {
    const cardArray = robots.map((user, i) => {
        return <Card key={robots[i].key.toString()} id={robots[i].key} name={robots[i].name} email={robots[i].email}></Card>
    }
    );
    return(
        <div>
            { cardArray }
        </div>
    );
}

export default CardList;