class Hotel {
    constructor(nombre, habitaciones, plantas, superficie) {
        this._nombre       = nombre;
        this._habitaciones = habitaciones;
        this._plantas      = plantas;
        this._superficie   = superficie;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set habitaciones(habitaciones) {
        this._habitaciones = habitaciones;
    }
    set plantas(plantas) {
        this._plantas = plantas;
    }
    set superficie(superficie) {
        this._superficie = superficie;
    }
    get nombre(){
        return this._nombre;
    }
    get habitaciones() {
        return this._habitaciones;
    }
    get plantas() {
        return this._plantas;
    }
    get superficie(){
        return this._superficie;
    }
    calcularMantenimiento() {
        let calculoPersonal = parseInt(this.habitaciones / 20);
        if (this.habitaciones % 20 != 0) {
            calculoPersonal++
        }

        let calculoCoste = calculoPersonal * 1500;

        return ("Personal requerido: " + calculoPersonal + " trabajadores\nCoste total personal: " + calculoCoste + "€/mes");
    }
    toString(){
        return "El hotel " + this.nombre + " tiene:\n" + this.habitaciones + " habitaciones\n" + this._plantas + " plantas\n" + this._superficie + " m2."
    }
}


