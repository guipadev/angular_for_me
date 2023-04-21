package com.back.articulos.controller;

import com.back.articulos.model.dto.ArticuloDTO;
import com.back.articulos.service.impl.ArticuloServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/articulo")
@CrossOrigin(origins = "http://localhost:4200")
public class ArticuloController {

    private final ArticuloServiceImpl articuloService;

    public ArticuloController(ArticuloServiceImpl articuloService) {
        this.articuloService = articuloService;
    }

    @GetMapping("/")
    public List<ArticuloDTO> listarTodosLosArticulos() {
        return articuloService.listarTodosLosArticulos();
    }

    @PostMapping("/")
    public ResponseEntity<ArticuloDTO> guardarArticulo(@RequestBody ArticuloDTO articuloDTO) {
        ArticuloDTO respuesta = articuloService.guardarArticulo(articuloDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(respuesta);
    }

    @DeleteMapping("/{codigo}")
    public ResponseEntity<ArticuloDTO> eliminarArticulo(@PathVariable Long codigo) {
        ArticuloDTO respuesta = articuloService.eliminarArticulo(codigo);
        return ResponseEntity.ok(respuesta);
    }

    @GetMapping("/{codigo}")
    public ResponseEntity<ArticuloDTO> obtenerArticulosPorId(@PathVariable Long codigo) {
        ArticuloDTO articuloDTO = articuloService.obtenerArticulosPorId(codigo);
        return ResponseEntity.ok(articuloDTO);
    }

    @PutMapping("/{codigo}")
    public ResponseEntity<ArticuloDTO> actualizarArticulo(@PathVariable Long codigo, @RequestBody ArticuloDTO detallesArticuloDTO) {
        ArticuloDTO respuesta = articuloService.actualizarArticulo(codigo, detallesArticuloDTO);
        return ResponseEntity.ok(respuesta);
    }
}

