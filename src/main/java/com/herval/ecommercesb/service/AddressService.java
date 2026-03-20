package com.herval.ecommercesb.service;

import com.herval.ecommercesb.model.User;
import com.herval.ecommercesb.payload.AddressDTO;

import java.util.List;

public interface AddressService {
    AddressDTO createAddress(AddressDTO addressDTO, User user);
    List<AddressDTO> getAddresses();
    AddressDTO getAddressesById(Long addressId);
    List<AddressDTO> getAddressesByUserId(User user);
    AddressDTO updateAddress(AddressDTO addressDTO, Long addressId);
    String deleteAddress(Long addressId);
}
