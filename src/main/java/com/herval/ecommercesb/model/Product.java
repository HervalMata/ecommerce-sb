package com.herval.ecommercesb.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"category", "user"})
@EqualsAndHashCode(exclude = {"category", "user"})
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long productId;

    @NotBlank
    @Size(min = 3, message = "O nome do produto deve ter pelo menos 3 caracteres")
    private String productName;
    private String image;

    @NotBlank
    @Size(min = 6, message = "A descrição do produto deve ter pelo menos 6 caracteres")
    private String description;
    private Integer quantity;
    private Double price;
    private Double discount;
    private double specialPrice;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User user;

    @OneToMany(mappedBy = "product",
                cascade = {CascadeType.MERGE, CascadeType.PERSIST},
                fetch = FetchType.LAZY)
    private List<CartItem> cartItems = new ArrayList<>();
}
