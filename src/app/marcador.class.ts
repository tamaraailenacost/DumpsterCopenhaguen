

export class Marcador {

    public lat: number;
    public lng: number;
    public title   = 'Titulo';
    public feature = 'Descripción';
    public cont: number;


    constructor( lat: number, lng: number) {

        this.lat = lat;
        this.lng = lng;
        this.cont = 0;



    }
}