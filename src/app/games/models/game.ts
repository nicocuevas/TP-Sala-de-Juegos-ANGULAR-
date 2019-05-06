import { User } from 'src/app/models/user';

export class Game {

    protected name:string;
    protected score:string;
    protected date:string;
    protected user:User;
    protected image:string;
    protected title:string;
    protected description:string;

    constructor(name:string, score:string, user:User,
                image?:string, description?:string, title?:string){
        this.name = name;
        this.score = score;
        this.user = user;
        this.date = this.GetFormattedDate();
        this.image = image ? image : 'default image';
        this.description = description; 
        this.title = title;
    }

    protected GetFormattedDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; 
        const yyyy = today.getFullYear();
        let day = '';
        let month = ''; 

        if(dd<10) 
        {
            day=`0${dd}`;
        } 

        if(mm<10) 
        {
            month=`0${mm}`;
        } 
        
        return `${day}-${month}-${yyyy}`;
    }

    protected startGame():void{
        // should be implemented 
    }

    protected endGame():void{
        // should be implemented
    }
}
