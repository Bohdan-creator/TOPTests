using Microsoft.EntityFrameworkCore.Migrations;

namespace TopTests.DAL.Migrations
{
    public partial class addSubjectId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SubjectId",
                table: "TestQuestions",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SubjectsId",
                table: "TestQuestions",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SubjectId",
                table: "Answers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SubjectsId",
                table: "Answers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TestQuestions_SubjectsId",
                table: "TestQuestions",
                column: "SubjectsId");

            migrationBuilder.CreateIndex(
                name: "IX_Answers_SubjectsId",
                table: "Answers",
                column: "SubjectsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Answers_Subjects_SubjectsId",
                table: "Answers",
                column: "SubjectsId",
                principalTable: "Subjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TestQuestions_Subjects_SubjectsId",
                table: "TestQuestions",
                column: "SubjectsId",
                principalTable: "Subjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Answers_Subjects_SubjectsId",
                table: "Answers");

            migrationBuilder.DropForeignKey(
                name: "FK_TestQuestions_Subjects_SubjectsId",
                table: "TestQuestions");

            migrationBuilder.DropIndex(
                name: "IX_TestQuestions_SubjectsId",
                table: "TestQuestions");

            migrationBuilder.DropIndex(
                name: "IX_Answers_SubjectsId",
                table: "Answers");

            migrationBuilder.DropColumn(
                name: "SubjectId",
                table: "TestQuestions");

            migrationBuilder.DropColumn(
                name: "SubjectsId",
                table: "TestQuestions");

            migrationBuilder.DropColumn(
                name: "SubjectId",
                table: "Answers");

            migrationBuilder.DropColumn(
                name: "SubjectsId",
                table: "Answers");
        }
    }
}
