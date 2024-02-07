﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Nexu_SMS.Entity;
using Nexu_SMS.Repository;


namespace Nexu_SMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class S_AttendanceController : ControllerBase
    {
        private readonly SAttendanceRepo sattendanceRepo;

        public S_AttendanceController(SAttendanceRepo sattendanceRepo)
        {
            this.sattendanceRepo = sattendanceRepo;
        }

        [HttpPost("Add_Student_Attadndace")]
        public IActionResult AddSAttendance(SAttendance attendance)
        {
            sattendanceRepo.Add(attendance);
            return Ok(attendance);
        }

        [HttpPut("UpdateStudentAttendance")]
        public IActionResult UpdateSAttandance(SAttendance attendance)
        {
            sattendanceRepo.Update(attendance);
            return Ok(attendance);
        }

        [HttpGet("GetStudentAttandance")]
        public IActionResult GetAllAttendance(string id)
        {
            return Ok(sattendanceRepo.Get(id));
        }

        [HttpGet("GetAllStudentAttendance")]
        public IActionResult GeSAttendance()
        {
            return Ok(sattendanceRepo.GetAll());
        }
    }
}
