type GreetProps = {
    name: string,
    messageCount: number
};

export const Greet = (props: GreetProps) => {
    return(
        <div>
            <h2>Welcome {props.name}!. You are welcome to the React withTypeScript.
             You have {props.messageCount} unread messages.</h2>
        </div>
    );
}