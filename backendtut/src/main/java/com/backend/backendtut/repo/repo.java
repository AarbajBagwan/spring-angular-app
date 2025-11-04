package com.backend.backendtut.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.backendtut.entity.User;

public interface repo extends JpaRepository<User, Long> {
}