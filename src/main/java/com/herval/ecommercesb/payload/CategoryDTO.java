package com.herval.ecommercesb.payload;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO {
    private Long categoryId;
    @NotBlank
    @Size(min = 5, message = "O nome da categoria deve ter pelo menos 5 caracteres")
    private String categoryName;
}
