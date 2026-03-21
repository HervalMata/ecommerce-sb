package com.herval.ecommercesb.repositories;

import com.herval.ecommercesb.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
