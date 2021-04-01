﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace TopTests.DAL.Migrations
{
    public partial class ComplexityOfQuestion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Complexity",
                table: "TestQuestions",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Complexity",
                table: "TestQuestions");
        }
    }
}
