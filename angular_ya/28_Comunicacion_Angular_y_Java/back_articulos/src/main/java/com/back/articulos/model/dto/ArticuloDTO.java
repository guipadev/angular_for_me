package com.back.articulos.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ArticuloDTO {

    private Long codigo;
    private String descripcion;
    private Float precio;

    //private String respuesta;


}
