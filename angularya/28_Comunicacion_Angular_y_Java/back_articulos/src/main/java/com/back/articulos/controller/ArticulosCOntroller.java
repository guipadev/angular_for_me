package com.back.articulos.controller;

import com.back.articulos.model.Articulos;
import com.back.articulos.repository.ArticulosRepository;
import exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class ArticulosCOntroller {

    @Autowired
    private ArticulosRepository articulosRepository;

    @GetMapping("/recuperartodos")
    public List<Articulos> listarTodosLosArticulos() {
        return articulosRepository.findAll();
    }

    @PostMapping("/alta")
    public Articulos guardarArticulo(@RequestBody Articulos articulos) {
        return articulosRepository.save(articulos);
    }

    @DeleteMapping("/baja/{codigo}")
    public ResponseEntity<Map<String, Boolean>> eliminarArticulo(@PathVariable Long codigo) {
        Articulos articulos = articulosRepository.findById(codigo)
                .orElseThrow(() -> new ResourceNotFoundException(("No existe el empleado con ID: " + codigo)));

        articulosRepository.delete(articulos);

        Map<String, Boolean> respuesta = new HashMap<>();

        respuesta.put("eliminar", Boolean.TRUE);

        return ResponseEntity.ok(respuesta);

    }


    @GetMapping("/seleccionar/{codigo}")
    public ResponseEntity<Articulos> obtenerArticulosPorId(@PathVariable Long codigo) {
        Articulos articulos = articulosRepository.findById(codigo)
                .orElseThrow(() -> new ResourceNotFoundException(("No existe articulo con codigo: " + codigo)));

        return ResponseEntity.ok(articulos);
    }

    @PutMapping("/modificacion/{codigo}")
    public ResponseEntity<Articulos> ActualizarArticulos(@PathVariable Long codigo, @RequestBody Articulos detallesArticulos) {
        Articulos articulos = articulosRepository.findById(codigo)
                .orElseThrow(() -> new ResourceNotFoundException(("No existe el articulo con codigo: " + codigo)));

        articulos.setDescripcion(detallesArticulos.getDescripcion());
        articulos.setPrecio(detallesArticulos.getPrecio());

        Articulos articuloActualizado = articulosRepository.save(articulos);

        return ResponseEntity.ok(articuloActualizado);
    }



}
