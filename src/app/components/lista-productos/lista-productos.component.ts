import { Component, OnInit } from '@angular/core';
import { ServicioProductosService } from 'src/app/services/servicio-productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  precio = 0;
  area = 0;
  ubicacion = '';
  habitaciones = '';
  referencia = '';
  img = '';
  via = '';
 descripicioninmue = '';


  precio1 = 0;
  area1 = 0;
  ubicacion1 = '';
  habitaciones1 = '';
  referencia1 = '';
  img1 = '';
  via1 = '';
 descripicioninmue1 = '';


  precio2 = 0;
  area2 = 0;
  ubicacion2 = '';
  habitaciones2 = '';
  referencia2 = '';
  img2 = '';
  via2 = '';
 descripicioninmue2 = '';


  precio3 = 0;
  area3 = 0;
  ubicacion3 = '';
  habitaciones3 = '';
  referencia3 = '';
  img3 = '';
  via3 = '';
 descripicioninmue3 = '';


  precio4 = 0;
  area4 = 0;
  ubicacion4 = '';
  habitaciones4 = '';
  referencia4 = '';
  img4 = '';
  via4 = '';
 descripicioninmue4 = '';


  precio5 = 0;
  area5 = 0;
  ubicacion5 = '';
  habitaciones5 = '';
  referencia5 = '';
  img5 = '';
  via5 = '';
 descripicioninmue5 = '';


  precio6 = 0;
  area6 = 0;
  ubicacion6 = '';
  habitaciones6 = '';
  referencia6 = '';
  img6 = '';
  via6 = '';
 descripicioninmue6= '';


  precio7 = 0;
  area7 = 0;
  ubicacion7 = '';
  habitaciones7 = '';
  referencia7 = '';
  img7 = '';
  via7= '';
 descripicioninmue7 = '';


  precio8 = 0;
  area8 = 0;
  ubicacion8= '';
  habitaciones8 = '';
  referencia8 = '';
  img8= '';
  via8= '';
 descripicioninmue8 = '';

  constructor(private servicioProdutos: ServicioProductosService) { }

  ngOnInit(): void {
    this.obtenerProducto();
this.obtenerProducto1();
this.obtenerProducto2();
this.obtenerProducto3();
this.obtenerProducto4();
this.obtenerProducto5();
this.obtenerProducto6();
this.obtenerProducto7();
this.obtenerProducto8();
  }

  obtenerProducto() {
      this.servicioProdutos.getClima().subscribe(data => {
        this.precio = data.data[0].attributes.field_inmu_prec;
        this.area = data.data[0].attributes.field_inmu_area_cons;
        // this.descripicioninmue = data.main.temp 
        this.ubicacion = data.data[0].attributes.field_inmu_nomb_call;
        this.habitaciones = data.data[0].attributes.field_inmu_nume_habi;
        this.referencia = data.data[0].attributes.field_inmu_refe;
        this.img = data.data[0].attributes.field_inmu_imag_arra[0];
        this.via = data.data[0].attributes.field_inmu_tipo_via
        
      }, error => {
        console.log(error);
      })
    }

 obtenerProducto1() {
      this.servicioProdutos.getClima().subscribe(data => {
        this.precio1 = data.data[1].attributes.field_inmu_prec;
        this.area1 = data.data[1].attributes.field_inmu_area_cons;
        // this.descripicioninmue1 = data.main.temp 
        this.ubicacion1 = data.data[1].attributes.field_inmu_nomb_call;
        this.habitaciones1 = data.data[1].attributes.field_inmu_nume_habi;
        this.referencia1 = data.data[1].attributes.field_inmu_refe;
        this.img1 = data.data[1].attributes.field_inmu_imag_arra[0];
        this.via1 = data.data[1].attributes.field_inmu_tipo_via
        
      }, error => {
        console.log(error);
      })
      
    }
 obtenerProducto2() {
      this.servicioProdutos.getClima().subscribe(data => {
        this.precio2 = data.data[2].attributes.field_inmu_prec;
        this.area2 = data.data[2].attributes.field_inmu_area_cons;
        // this.descripicioninmue2 = data.main.temp 
        this.ubicacion2 = data.data[2].attributes.field_inmu_nomb_call;
        this.habitaciones2 = data.data[2].attributes.field_inmu_nume_habi;
        this.referencia2 = data.data[2].attributes.field_inmu_refe;
        this.img2 = data.data[2].attributes.field_inmu_imag_arra[0];
        this.via2 = data.data[2].attributes.field_inmu_tipo_via
        
      }, error => {
        console.log(error);
      })
      
    }
 obtenerProducto3() {
      this.servicioProdutos.getClima().subscribe(data => {
        this.precio3 = data.data[3].attributes.field_inmu_prec;
        this.area3 = data.data[3].attributes.field_inmu_area_cons;
        // this.descripicioninmue3 = data.main.temp 
        this.ubicacion3 = data.data[3].attributes.field_inmu_nomb_call;
        this.habitaciones3 = data.data[3].attributes.field_inmu_nume_habi;
        this.referencia3 = data.data[3].attributes.field_inmu_refe;
        this.img3 = data.data[3].attributes.field_inmu_imag_arra[0];
        this.via3 = data.data[3].attributes.field_inmu_tipo_via
        
      }, error => {
        console.log(error);
      })
      
    }
 obtenerProducto4() {
      this.servicioProdutos.getClima().subscribe(data => {
        this.precio4 = data.data[4].attributes.field_inmu_prec;
        this.area4 = data.data[4].attributes.field_inmu_area_cons;
        // this.descripicioninmue4 = data.main.temp 
        this.ubicacion4 = data.data[4].attributes.field_inmu_nomb_call;
        this.habitaciones4 = data.data[4].attributes.field_inmu_nume_habi;
        this.referencia4 = data.data[4].attributes.field_inmu_refe;
        this.img4 = data.data[4].attributes.field_inmu_imag_arra[0];
        this.via4 = data.data[4].attributes.field_inmu_tipo_via
        
      }, error => {
        console.log(error);
      })
      
    }
 obtenerProducto5() {
      this.servicioProdutos.getClima().subscribe(data => {
        this.precio5 = data.data[5].attributes.field_inmu_prec;
        this.area5 = data.data[5].attributes.field_inmu_area_cons;
        // this.descripicioninmue5 = data.main.temp 
        this.ubicacion5 = data.data[5].attributes.field_inmu_nomb_call;
        this.habitaciones5 = data.data[5].attributes.field_inmu_nume_habi;
        this.referencia5 = data.data[5].attributes.field_inmu_refe;
        this.img5 = data.data[5].attributes.field_inmu_imag_arra[0];
        this.via5 = data.data[5].attributes.field_inmu_tipo_via
        
      }, error => {
        console.log(error);
      })
      
    }
 obtenerProducto6() {
      this.servicioProdutos.getClima().subscribe(data => {
        this.precio6 = data.data[6].attributes.field_inmu_prec;
        this.area6 = data.data[6].attributes.field_inmu_area_cons;
        // this.descripicioninmue6 = data.main.temp 
        this.ubicacion6 = data.data[6].attributes.field_inmu_nomb_call;
        this.habitaciones6 = data.data[6].attributes.field_inmu_nume_habi;
        this.referencia6 = data.data[6].attributes.field_inmu_refe;
        this.img6 = data.data[6].attributes.field_inmu_imag_arra[0];
        this.via6 = data.data[6].attributes.field_inmu_tipo_via
        
      }, error => {
        console.log(error);
      })
      
    }
 obtenerProducto7() {
      this.servicioProdutos.getClima().subscribe(data => {
        this.precio7 = data.data[7].attributes.field_inmu_prec;
        this.area7 = data.data[7].attributes.field_inmu_area_cons;
        // this.descripicioninmue7 = data.main.temp 
        this.ubicacion7 = data.data[7].attributes.field_inmu_nomb_call;
        this.habitaciones7 = data.data[7].attributes.field_inmu_nume_habi;
        this.referencia7 = data.data[7].attributes.field_inmu_refe;
        this.img7 = data.data[7].attributes.field_inmu_imag_arra[0];
        this.via7= data.data[7].attributes.field_inmu_tipo_via
        
      }, error => {
        console.log(error);
      })
      
    }
 obtenerProducto8() {
      this.servicioProdutos.getClima().subscribe(data => {
        this.precio8 = data.data[8].attributes.field_inmu_prec;
        this.area8 = data.data[8].attributes.field_inmu_area_cons;
        // this.descripicioninmue8 = data.main.temp 
        this.ubicacion8 = data.data[8].attributes.field_inmu_nomb_call;
        this.habitaciones8 = data.data[8].attributes.field_inmu_nume_habi;
        this.referencia8 = data.data[8].attributes.field_inmu_refe;
        this.img8 = data.data[8].attributes.field_inmu_imag_arra[0];
        this.via8 = data.data[8].attributes.field_inmu_tipo_via
        
      }, error => {
        console.log(error);
      })
      
    }

  
}
