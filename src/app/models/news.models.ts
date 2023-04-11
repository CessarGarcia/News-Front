export class newsModels{
    _id?: number;  //is not required
    titulo: string;
    descripcion: string;
    categoria: string;
    pais: string;

    constructor(_id: number, titulo: string, descripcion: string, categoria: string, pais: string){
        this._id = _id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.pais = pais;
    }
}