type PersonListsProps = {
    persons:{
        name:{
            first:string,
            last:string
        },
        age:number,
        hobbies:string[]
    }[]
};

function PersonsList(props:PersonListsProps){
    return(
        <div>
            {props.persons.map(person => {
                return(
                    <div>
                        <h2>{person.name.first + " " + person.name.last}</h2>
                        <h3>{"Age: " + person.age}</h3>
                        <h3>{"Hobbies: "+ person.hobbies}</h3>
                    </div>
                )
            })
            }
        </div>
    );
}
export default PersonsList;