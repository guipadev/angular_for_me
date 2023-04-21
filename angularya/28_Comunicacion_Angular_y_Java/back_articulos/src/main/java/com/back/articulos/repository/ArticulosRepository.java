package com.back.articulos.repository;

import com.back.articulos.model.Articulos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticulosRepository extends  JpaRepository<Articulos, Long>{
}
