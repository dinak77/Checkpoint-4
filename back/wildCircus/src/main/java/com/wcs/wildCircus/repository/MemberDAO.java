package com.wcs.wildCircus.repository;

import com.wcs.wildCircus.entities.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberDAO extends JpaRepository<Member, Long> {
}
