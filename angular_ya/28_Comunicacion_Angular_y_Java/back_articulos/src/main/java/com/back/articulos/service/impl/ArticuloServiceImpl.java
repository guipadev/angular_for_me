package com.back.articulos.service.impl;

import com.back.articulos.model.Articulos;
import com.back.articulos.model.dto.ArticuloDTO;
import com.back.articulos.repository.ArticuloRepository;
import exceptions.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ArticuloServiceImpl {

    private final ArticuloRepository articuloRepository;
    public ArticuloServiceImpl(ArticuloRepository articuloRepository) {
        this.articuloRepository = articuloRepository;
    }

    public List<ArticuloDTO> listarTodosLosArticulos() {

        List<Articulos> articulos = articuloRepository.findAll();
        List<ArticuloDTO> articulosDTO = new ArrayList<>();

        for (Articulos articulo : articulos) {
            ArticuloDTO articuloDTO = new ArticuloDTO();
            articuloDTO.setCodigo(articulo.getCodigo());
            articuloDTO.setDescripcion(articulo.getDescripcion());
            articuloDTO.setPrecio(articulo.getPrecio());

            articulosDTO.add(articuloDTO);
        }

        return articulosDTO;
    }

    public ArticuloDTO guardarArticulo(ArticuloDTO articuloDTO) {
        Articulos articulo = new Articulos();
        articulo.setDescripcion(articuloDTO.getDescripcion());
        articulo.setPrecio(articuloDTO.getPrecio());

        articulo = articuloRepository.save(articulo);

        articuloDTO.setCodigo(articulo.getCodigo());

        return articuloDTO;
    }

    public ArticuloDTO eliminarArticulo(Long codigo) {
        Articulos articulo = articuloRepository.findById(codigo)
                .orElseThrow(() -> new ResourceNotFoundException(("No existe el articulo con codigo: " + codigo)));

        articuloRepository.delete(articulo);

        ArticuloDTO respuesta = new ArticuloDTO();
        Map<String, Boolean> eliminado = new HashMap<>();
        eliminado.put("eliminado", Boolean.TRUE);
        //respuesta.setRespuesta(eliminado.toString());

        return respuesta;
    }

    public ArticuloDTO obtenerArticulosPorId(Long codigo) {
        Articulos articulo = articuloRepository.findById(codigo)
                .orElseThrow(() -> new ResourceNotFoundException(("No existe el articulo con codigo: " + codigo)));

        ArticuloDTO articuloDTO = new ArticuloDTO();
        articuloDTO.setCodigo(articulo.getCodigo());
        articuloDTO.setDescripcion(articulo.getDescripcion());
        articuloDTO.setPrecio(articulo.getPrecio());

        return articuloDTO;
    }

    public ArticuloDTO actualizarArticulo(Long codigo, ArticuloDTO detallesArticuloDTO) {
        Articulos articulo = articuloRepository.findById(codigo)
                .orElseThrow(() -> new ResourceNotFoundException(("No existe el articulo con codigo: " + codigo)));

        articulo.setDescripcion(detallesArticuloDTO.getDescripcion());
        articulo.setPrecio(detallesArticuloDTO.getPrecio());

        articulo = articuloRepository.save(articulo);

        detallesArticuloDTO.setCodigo(articulo.getCodigo());

        return detallesArticuloDTO;
    }
}