class Person
{
    private person: string;

    constructor( person: string )
    {
        this.person = person;

        this.toUpper( this.person );
    }

    private toUpper( person: string ): string
    {
        const changedName: string = person.toUpperCase();

        console.log( changedName );

        return changedName;
    }
}

export {
    Person as default,
}
