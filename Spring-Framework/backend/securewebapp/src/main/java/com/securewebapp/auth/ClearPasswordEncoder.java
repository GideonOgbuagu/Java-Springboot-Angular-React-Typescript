package com.securewebapp.auth;

import org.springframework.security.crypto.password.PasswordEncoder;

public class ClearPasswordEncoder implements PasswordEncoder {

	@Override
	public String encode(CharSequence rawPassword) {
		// TODO Auto-generated method stub
		return rawPassword.toString();
	}

	@Override
	public boolean matches(CharSequence rawPassword, String encodedPassword) {
		// TODO Auto-generated method stub
		String password = rawPassword.toString();
		boolean answer = encodedPassword.equals(password);
		return answer;
	}

}
