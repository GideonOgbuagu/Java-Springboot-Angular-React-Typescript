package com.example.demo;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ProjectServlet")
public class ProjectServlet extends HttpServlet{

	private static final long serialVersionUID = -1306151396634098221L;
	
	public void init() throws ServletException {
		super.init();
	}
	
	public void destroy() {
		super.destroy();
	}
	
	// CREATE
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {	
		String servletHeaderID = request.getHeader("Payload-Data");
		String servletHeaderResponse;
		
		if(servletHeaderID != null && !servletHeaderID.isEmpty()) {
			servletHeaderResponse = servletHeaderID;
		} else {
			servletHeaderResponse = "nothing";
    	    // Changes the response status to 400 Bad Request.
    	    response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
		
    	// Store the 'responseText' string in the response object (to be sent to the client)
    	String responseText = "You sent " + servletHeaderResponse + " to the server. ";

    	// writes the text to the response.
    	response.getWriter().append(responseText);
		System.out.println("POST was called.");
	}
	// READ
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String servletHeaderID = request.getHeader("Payload-Data");
		String servletHeaderResponse;
		
		if(servletHeaderID != null && !servletHeaderID.isEmpty()) {
			servletHeaderResponse = servletHeaderID;
		} else {
			servletHeaderResponse = "nothing";
    	    // Changes the response status to 400 Bad Request.
    	    response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
		
    	// Store the 'responseText' string in the response object (to be sent to the client)
    	String responseText = "You sent " + servletHeaderResponse + " to the server. ";

    	// writes the text to the response.
    	response.getWriter().append(responseText);
		
		System.out.println("GET was called.");
	}
	// UPDATE
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String servletHeaderID = request.getHeader("Payload-Data");
		String servletHeaderResponse;
		
		if(servletHeaderID != null && !servletHeaderID.isEmpty()) {
			servletHeaderResponse = servletHeaderID;
		} else {
			servletHeaderResponse = "nothing";
    	    // Changes the response status to 400 Bad Request.
    	    response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
		
    	// Store the 'responseText' string in the response object (to be sent to the client)
    	String responseText = "You sent " + servletHeaderResponse + " to the server. ";

    	// writes the text to the response.
    	response.getWriter().append(responseText);
		System.out.println("PUT was called.");
	}
	// DELETE
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String servletHeaderID = request.getHeader("Payload-Data");
		String servletHeaderResponse;
		
		if(servletHeaderID != null && !servletHeaderID.isEmpty()) {
			servletHeaderResponse = servletHeaderID;
		} else {
			servletHeaderResponse = "nothing";
    	    // Changes the response status to 400 Bad Request.
    	    response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
		
    	// Store the 'responseText' string in the response object (to be sent to the client)
    	String responseText = "You sent " + servletHeaderResponse + " to the server. ";

    	// writes the text to the response.
    	response.getWriter().append(responseText);
		System.out.println("DELETE was called.");
	}
	
}
