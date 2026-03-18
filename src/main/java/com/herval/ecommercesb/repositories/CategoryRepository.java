package com.herval.ecommercesb.repositories;

import com.herval.ecommercesb.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
