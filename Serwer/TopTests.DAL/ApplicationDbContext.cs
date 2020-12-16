using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using TopTests.DAL.Entities;

namespace TopTests.DAL
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Users> Users { get; set; }
        public DbSet<Test> Tests { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Results> Results { get; set; }
        public DbSet<Subjects> Subjects { get; set; }
        public DbSet<TestQuestions> TestQuestions { get; set; }
        public DbSet<Answers> Answers { get; set; }
        public DbSet<RefreshTokens> RefreshTokens { get; set; }
        public DbSet<FeedBacks> FeedBacks { get; set; }
        public DbSet<Files> Files { get; set; }
        public DbSet<TimeRemainingOfTest> TimeRemainingOfTests { get; set; }

        public static byte[] ReadFile(string sPath)
        {
            byte[] data ;
            FileInfo fInfo = new FileInfo(sPath);
            long numBytes = fInfo.Length;
            FileStream fStream = new FileStream(sPath, FileMode.Open, FileAccess.Read);
            BinaryReader br = new BinaryReader(fStream);
            data = br.ReadBytes((int)numBytes);

            return data;
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Files>().HasData(
                 new
                 {
                     Id = 4,
                     FileName = "Multiple Choices Test",
                     FileContent = ReadFile("C:\\Users\\kuche\\Desktop\\TopTests\\TypesOfTest\\MultipleChoiseTest.csv"),
                     TypeOfTest = 0
                 },
                 new {
                        Id = 5,
                     FileName = "Single Selection Test",
                     FileContent = ReadFile("C:\\Users\\kuche\\Desktop\\TopTests\\TypesOfTest\\SingleSelectionTest .csv"),
                     TypeOfTest = 1
                 }

                ); ;
        }
    }
 
}