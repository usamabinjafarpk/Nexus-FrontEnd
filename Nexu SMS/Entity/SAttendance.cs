﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nexu_SMS.Entity
{
    [Table("Student_Attendance_Table")]
    public class SAttendance
    {
        [Key]
        public Guid attendanceId { get; set; }
        [Required]
        public string studentId { get; set;}
       
        [Required]
        public DateTime date { get; set;}
        [Required]
        public bool status { get; set;}
        ////
      
        
    }
}
