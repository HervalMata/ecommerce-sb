package com.herval.ecommercesb.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "addresses")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addressId;

    @NotBlank
    @Size(min = 5, message = "O nome da rua deve ter pelo menos 5 caracteres")
    private String street;

    @NotBlank
    @Size(min = 5, message = "O nome da moradia deve ter pelo menos 5 caracteres")
    private String buildingName;

    @NotBlank
    @Size(min = 4, message = "O nome da cidade deve ter pelo menos 4 caracteres")
    private String city;

    @NotBlank
    @Size(min = 2, message = "A sigla do estado deve ter pelo menos 2 caracteres")
    private String state;

    @NotBlank
    @Size(min = 2, message = "O nome do país deve ter pelo menos 2 caracteres")
    private String country;

    @NotBlank
    @Size(min = 8, message = "O CEP do endereço deve ter pelo menos 8 caracteres")
    private String postalCode;

    @ToString.Exclude
    @ManyToMany(mappedBy = "addresses")
    private List<User> users = new ArrayList<>();

    public Address(String street, String buildingName, String city, String state, String country, String postalCode) {
        this.street = street;
        this.buildingName = buildingName;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postalCode = postalCode;
    }
}
